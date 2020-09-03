 <!-- 编辑页面 -->
<template>
    <div id="users"  >
    
         <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="label1" prop="cfbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="jzkh" >
            </el-table-column>
            <el-table-column :label="label3" prop="ygbh">
            </el-table-column>
         
            <el-table-column label="删除">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteById(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[2, 4, 5, 10]"
            :page-size="pageSize"
            layout=" prev, pager, next, sizes, total"
            :total="total"
            
            style="width:60%;float:left;">
          </el-pagination>
        <br>
         <el-dialog  :visible.sync="dialogVisible1" width="40%"  :close-on-click-modal="false" @close="noupdate">
            
                    <el-form ref="VO1" :model="VO1" label-width="80px"  style="margin:5px;width:90%;">
                        
                <el-form-item :label="label1" prop="cfbh">
						   <span style="float:left;">{{VO1.cfbh}}</span>
				</el-form-item>
				<el-form-item :label="label2" prop="jzkh">
                     <span style="float:left;">{{VO1.jzkh}}</span>
				</el-form-item>
				<el-form-item :label="label3" prop="ygbh">
                    <el-input v-model="VO1.ygbh" ></el-input>
				</el-form-item>
                        
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改用户信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/chufang7.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"处方编号",
     label2:"就诊卡号",
     label3:"员工编号",
     label4:"药品编号",
     label5:"药品数量",
      //表格数据
                tableData: [
                    {
               	cfbh: '',
					jzkh: '',
					ygbh: '',
					ypsl: '',

					id:'',

                     },
                    
                ],
      VO: { 	cfbh: '',
					jzkh: '',
					ygbh: '',
					ypsl: '',

					id:'',
       },
        VO1: { 
        	       	cfbh: '',
					jzkh: '',
					ygbh: '',
					ypsl: '',

					id:'',
       },
               
                currentPage1: 1,
                total: 0,
                page: 1,
                pageSize: 10,
                pageNum:1,


                dialogVisible: false,
                dialogVisible1: false,
            }
        },

         created() {
            this.getUser();
},
    mounted () {
            this.getUser();
        },
        methods: {
            

    //修改页面显示
        update(index, row) {
            this.idx = index;
            this.VO1=row;
            this.dialogVisible1 = true;
        },
         //修改页面不显示
        noupdate () {
            this.dialogVisible1 = false;
            this.$refs['VO1'].clearValidate() 
        },
         //修改键功能
                 
        updatefor(VO1) {
                    let VO11 = { 	
							cfbh: this.VO1.cfbh,
							jzkh: this.VO1.jzkh,
							ygbh: this.VO1.ygbh,
							ypsl: this.VO1.ypsl,

							id: this.VO1.id,

						

                        }
                    Api.update(VO11).then(res => {
                    console.log(res);
                    this.getUser ();
                                                      this.noupdate ();
                    }).catch(err => {
                                                                console.log(err)
                                                                 this.getUser ();
                    });
                    },
                                
                          //删除键功能
                        deleteById(index,row){
                        this.idx=index;
                        this.msg=row;
                        Api.deleteBycfbh(this.msg.cfbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                             let para={
    cfbh: this.VO.cfbh,
    pageNum:this.pageNum,
    pageSize:this.pageSize,
};
                        Api.selectById(para).then(res=>{
            this.tableData=res.data.list;
                           
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                            let para={
    jzkh: this.VO.jzkh,
    pageNum:this.pageNum,
    pageSize:this.pageSize,
};
                       
                        Api.selectByName(para).then(res=>{

                             let tableData1=[
                                    {
                                cfbh:res.data.cfbh,
							jzkh: res.data.jzkh,
							ygbh: res.data.ygbh,
							ypsl: res.data.ypsl,

							id:res.data.id,
                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
//获取列表数据
getUser(){

 let para={
    pageNum:this.pageNum,
    pageSize:this.pageSize,
};

this.loading=true;
Api. UserList(para).then(res=>{
    this.total=res.data.total;
    this.currentPage1=res.data.currentPage1;
    this.tableData=res.data.list;
})
},

handleSizeChange(val){
    this.pageSize=val;
    this.getUser();
},
    
handleCurrentChange(val){
    this.pageNum=val;
    this.getUser();
},  
},

}
</Script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
   text-align: center;
  }
 
#users{
   text-align: center;
   margin-left: 2%
  }
</style>

