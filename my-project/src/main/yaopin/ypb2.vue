 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="ypbh" >
                            <el-input v-model="VO.ypbh" value="1"></el-input>
                        </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item >
                        <el-button style="float:left;" type="primary" icon="el-icon-news" size="mini" @click="selectById">查询</el-button>
                    </el-form-item>
                </el-col>
                </el-form>
 </el-col>
  <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                <el-col :span="20">
                        <el-form-item :label="label2" prop="ypmc">
                    <el-input v-model="VO.ypmc"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="4">
                     <el-form-item >
                      <el-button type="primary" icon="el-icon-news" size="mini" @click="selectByName">查询</el-button>
                    </el-form-item>
                </el-col>
                </el-form>
            </el-col>

        </el-row>
    
         <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="label1" prop="ypbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="ypmc" >
            </el-table-column>
            <el-table-column :label="label3" prop="ypgn">
            </el-table-column>
             <el-table-column  :label="label4" prop="ypjg" >
            </el-table-column>
            <el-table-column :label="label5" prop="ypkc">
            </el-table-column>
            <el-table-column  :label="label6" prop="scdw" >
            </el-table-column>
            <el-table-column :label="label7" prop="scrq"  >
            </el-table-column>
            <el-table-column :label="label8" prop="gqrq" >
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
                           <el-row :gutter="10">
                             
  <el-col :span="12">
                <el-form-item :label="label1" prop="ypbh">
						   <span style="float:left;">{{VO1.ypbh}}</span>
				</el-form-item>
				<el-form-item :label="label2" prop="ypmc">
                     <span style="float:left;">{{VO1.ypmc}}</span>
				</el-form-item>
				<el-form-item :label="label3" prop="ypgn">
                    <el-input v-model="VO1.ypgn" ></el-input>
				</el-form-item>
				
					<el-form-item :label="label4" prop="ypjg">
							<el-input v-model="VO1.ypjg" ></el-input>
					</el-form-item>
					
					
    </el-col>
     <el-col :span="12">
         <el-form-item :label="label5" prop="ypkc">
						<el-input v-model="VO1.ypkc"></el-input>
					</el-form-item>
                 <el-form-item :label="label6" prop="scdw">
						<el-input v-model="VO1.scdw"></el-input>
				</el-form-item>
			 	 <el-form-item :label="label7" prop="scrq">
						  <el-date-picker
         style="width:100%;"
          v-model="VO.scrq"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
					
				</el-form-item>
				<el-form-item :label="label8" prop="gqrq">
					<el-date-picker
         style="width:100%;"
          v-model="VO.gqrq"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
				</el-form-item>
				
    </el-col>
</el-row>
                           
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改用户信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/yaopin5.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"药品编号",
     label2:"药品名称",
     label3:"药品功能",
     label4:"药品价格",
     label5:"药品库存",
     label6:"生产单位",
		 label7:"生产日期",
		 label8:"过期日期",
      //表格数据
                tableData: [
                    {
               	ypbh: '',
					ypmc: '',
					ypgn: '',
					ypjg: '',

					ypkc:'',
					scdw:'',
					scrq:'',
					gqrq: '',

                     },
                    
                ],
      VO: { 	ypbh: '',
					ypmc: '',
					ypgn: '',
					ypjg: '',

					ypkc:'',
					scdw:'',
					scrq:'',
					gqrq: '',
       },
        VO1: { 
        	       	ypbh: '',
					ypmc: '',
					ypgn: '',
					ypjg: '',

					ypkc:'',
					scdw:'',
					scrq:'',
					gqrq: '',
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
							ypbh: this.VO1.ypbh,
							ypmc: this.VO1.ypmc,
							ypgn: this.VO1.ypgn,
							ypjg: this.VO1.ypjg,

							ypkc: this.VO1.ypkc,
							scdw: this.VO1.scdw,
							scrq: this.VO1.scrq,
							gqrq: this.VO1.gqrq,

						

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
                        Api.deleteById(this.msg.ypbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let ypbh=this.VO.ypbh;
                        Api.selectById(ypbh).then(res=>{

                             let tableData1=[
                                    {
                            ypbh:res.data.ypbh,
							ypmc: res.data.ypmc,
							ypgn: res.data.ypgn,
							ypjg: res.data.ypjg,

							ypkc:res.data.ypkc,
							scdw: res.data.scdw,
							scrq: res.data.scrq,
							gqrq: res.data.gqrq,

                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let ypmc=this.VO.ypmc;
                        Api.selectByName(ypmc).then(res=>{

                             let tableData1=[
                                    {
                                ypbh:res.data.ypbh,
							ypmc: res.data.ypmc,
							ypgn: res.data.ypgn,
							ypjg: res.data.ypjg,

							ypkc:res.data.ypkc,
							scdw: res.data.scdw,
							scrq: res.data.scrq,
							gqrq: res.data.gqrq,
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

