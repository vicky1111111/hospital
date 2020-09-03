 <!-- 编辑页面 -->
<template>
    <div id="users"  >
    
         <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="label1" prop="ggbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="ggbt" >
            </el-table-column>
             <el-table-column  :label="label3" prop="ygbh" >
            </el-table-column>
            <el-table-column :label="label4" prop="ggnr">
            </el-table-column>

         
            <el-table-column label="编辑" >
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="update(scope.$index, scope.row)">编辑</el-button>
                    
                </template>
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
                           <el-form-item :label="label1" prop="ggbh">
														 
                              <span style="float:left;">{{VO1.ggbh}}</span>
													</el-form-item>
													
															<el-form-item :label="label2" prop="ggbt">
														<el-input v-model="VO1.ggbt"></el-input>
													</el-form-item>
															<el-form-item :label="label3" prop="ygbh">
														<el-input v-model="VO1.ygbh" ></el-input>
													</el-form-item>
															<el-form-item :label="label4" prop="ggnr">
														<el-input v-model="VO1.ggnr" ></el-input>
													</el-form-item>
												
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改检查项目信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/gonggao.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
    label1:"公告编号",
     label2:"公告标题",
     label3:"员工编号",
     label4:"公告内容",
     
      //表格数据
                tableData: [
                    {
              	ggbh: '',
								ggbt: '',
								ygbh: '',
								ggnr: '',
                     },
                    
                ],
      VO: { 
        	      	ggbh: '',
					ggbt: '',
					ygbh: '',
					ggnr: '',
       },
        VO1: { 
        	      	ggbh: '',
					ggbt: '',
					ygbh: '',
					ggnr: '',
       },
               nowTime:'',
               ggbh: '',
            ggbt: '',
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
							ggbh: this.VO1.ggbh,
							ggbt: this.VO1.ggbt,
							ygbh: this.VO1.ygbh,
							ggnr: this.VO1.ggnr,

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
                        Api.deleteById(this.msg.ggbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let ggbh=this.VO.ggbh;
                        Api.selectById(ggbh).then(res=>{

                             let tableData1=[
                                    {
                    		ggbh: res.data.ggbh,
												ggbt: res.data.ggbt,
												ygbh: res.data.ygbh,
												ggnr: res.data.ggnr,

                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let ggbt=this.VO.ggbt;
                        Api.selectByName(ggbt).then(res=>{

                             let tableData1=[
                                    {
                                ggbh: res.data.ggbh,
															ggbt: res.data.ggbt,
															ygbh: res.data.ygbh,
															ggnr: res.data.ggnr,
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
   
    ygbh: localStorage.getItem("ygbh"),
    pageNum:this.pageNum,
    pageSize:this.pageSize,
};

this.loading=true;
Api. selectByygbh(para).then(res=>{
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

