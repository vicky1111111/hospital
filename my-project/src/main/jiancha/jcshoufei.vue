 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="VO" :model="brVO" label-width="80px"  size="mini" style="margin:0px;width:90%;height:10px;">
                  <el-col :span="12">
                         <span style="float:left;">输入编号获取缴费信息：</span>
                </el-col>
                <el-col :span="12">
                        <el-form-item label="就诊卡号" prop="jzkh" >
                            <el-input v-model="brVO.jzkh" value="1"></el-input>
                        </el-form-item>
                </el-col>
                </el-form>
            </el-col>
            <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:90%;height:10px;">
                 
                <el-col :span="12">
                        <el-form-item :label="label1" prop="xmbh" >
                            <el-input v-model="VO.xmbh" value="1"></el-input>
                        </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item >
                        <el-button style="float:left;" type="primary" icon="el-icon-news" size="mini" @click="selectById">确认编号</el-button>
                    </el-form-item>
                </el-col>
                </el-form>
            </el-col>

        </el-row>
        <el-row >
             <el-col :span="4">
                   <span style="">就诊卡号 ：</span>
                     <span style="">{{jzkh}}</span>
            </el-col>
            
              <el-col :span="4">
                    <span style="">项目编号 ：</span>
                     <span style="">{{xmbh}}</span>
            </el-col>
             
             <el-col :span="24">
                   <p style="float:left;"> </p>
            </el-col>
             <el-col :span="24">
                   <span style="float:left;">检查项目信息如下 ：</span>
            </el-col>
            </el-row>
    
         <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="label1" prop="xmbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="xmmc" >
            </el-table-column>
             <el-table-column  :label="label3" prop="xmfy" >
            </el-table-column>
            <el-table-column :label="label4" prop="xmms">
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
        </el-row>
         <el-row >
              <el-col :span="24">
                        <el-col :span="4">
                            <span style="float：left">缴费金额：￥</span>
                            <span style="">{{jfje}}</span>
                        </el-col>
                         <el-col :span="4">
                            <el-button style="" type="primary" icon="el-icon-news" size="mini" @click="insertshouru">缴费</el-button>
                   
                        </el-col>
            </el-col>
            
            </el-row>
         <el-dialog  :visible.sync="dialogVisible1" width="40%"  :close-on-click-modal="false" @close="noupdate">
            
                    <el-form ref="VO1" :model="VO1" label-width="80px"  style="margin:5px;width:90%;">
                           <el-form-item :label="label1" prop="xmbh">
														 
                              <span style="float:left;">{{VO1.xmbh}}</span>
													</el-form-item>
													
															<el-form-item :label="label2" prop="xmmc">
														<el-input v-model="VO1.xmmc"></el-input>
													</el-form-item>
															<el-form-item :label="label3" prop="xmfy">
														<el-input v-model="VO1.xmfy" ></el-input>
													</el-form-item>
															<el-form-item :label="label4" prop="xmms">
														<el-input v-model="VO1.xmms" ></el-input>
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

import hjApi from '@/apis/huajia3.js'
import Api from '@/apis/jiancha2.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
      label1:"项目编号",
     label2:"项目名称",
     label3:"项目费用",
     label4:"项目描述",
     
      //表格数据
                tableData: [
                    {
              	xmbh: '',
								xmmc: '',
								xmfy: '',
								xmms: '',
                     },
                    
                ],
      VO: { 
        	      	xmbh: '',
					xmmc: '',
					xmfy: '',
					xmms: '',
       },
       brVO:{
           	jzkh: '',
       },
        VO1: { 
        	      	xmbh: '',
					xmmc: '',
					xmfy: '',
					xmms: '',
       },
               nowTime:'',
               xmbh: '',
                xmmc: '',
                currentPage1: 1,
                total: 0,
                page: 1,
                pageSize: 10,
                pageNum:1,


                dialogVisible: false,
                dialogVisible1: false,

jzkh:'',
jfje:'',
jflx:'',
            }
        },

         created() {
           // this.getUser();
},
    mounted () {
            //this.getUser();
           
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
							xmbh: this.VO1.xmbh,
							xmmc: this.VO1.xmmc,
							xmfy: this.VO1.xmfy,
							xmms: this.VO1.xmms,

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
                        Api.deleteById(this.msg.xmbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let xmbh=this.VO.xmbh;
                        Api.selectById(xmbh).then(res=>{

                             let tableData1=[
                                    {
                    		                    xmbh: res.data.xmbh,
												xmmc: res.data.xmmc,
												xmfy: res.data.xmfy,
												xmms: res.data.xmms,

                                     },
                                    
                                ]
                this.tableData=tableData1;
                this.xmbh=this.VO.xmbh;
                this.jfje=res.data.xmfy;
                this.jzkh=this.brVO.jzkh;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let xmmc=this.VO.xmmc;
                        Api.selectByName(xmmc).then(res=>{

                             let tableData1=[
                                    {
                                xmbh: res.data.xmbh,
															xmmc: res.data.xmmc,
															xmfy: res.data.xmfy,
															xmms: res.data.xmms,
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
insertshouru() {
			 let hjVO={
    id:'1',
   jzkh:this.jzkh,
   jfje:this.jfje,
   jflx:'2',
};
            hjApi.insert(hjVO).then(res => {
                console.log(res);

                this.tolist();
                }).catch(err => {
                        console.log(err)
                });
		},
				 //返回编辑页功能		
		tolist() {
			 this.$router.push({
          path: `/jcxmb`,
        })
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

