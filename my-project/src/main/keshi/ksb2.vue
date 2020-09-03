 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="ksbh" >
                            <el-input v-model="VO.ksbh" value="1"></el-input>
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
                        <el-form-item :label="label2" prop="ksmc">
                    <el-input v-model="VO.ksmc"></el-input>
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
            <el-table-column :label="label1" prop="ksbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="ksmc" >
            </el-table-column>
             <el-table-column  :label="label3" prop="ksdz" >
            </el-table-column>
            <el-table-column :label="label4" prop="ksjj">
            </el-table-column>
            <el-table-column label="科室人员" >
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updateyi(scope.$index, scope.row)">查看科室人员</el-button>
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
                           
                         
                        <el-form-item :label="label1" prop="ksbh">
                             <span style="float:left;">{{VO1.ksbh}}</span>
                        </el-form-item>
                    
                        <el-form-item :label="label2" prop="ksmc">
                            <el-input v-model="VO1.ksmc"></el-input>
                        </el-form-item>
                        <el-form-item :label="label3" prop="ksdz">
                            <el-input v-model="VO1.ksdz" ></el-input>
                        </el-form-item>
                        <el-form-item :label="label4" prop="ksjj">
                            <el-input v-model="VO1.ksjj" ></el-input>
                        </el-form-item>
                    
                           
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改就诊卡信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
        <el-dialog  :visible.sync="dialogVisibleyi" width="90%"  :close-on-click-modal="false" @close="noupdateyi">
    
            <!--表格数据及操作-->
        <el-table :data="tableDatayi" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="yisheng1" prop="ygbh" >
            </el-table-column>
             <el-table-column :label="yisheng2" prop="ygxm" >
            </el-table-column>
            <el-table-column :label="yisheng3" prop="ygxb" :formatter="formatRole">
            </el-table-column>
            <el-table-column  :label="yisheng4" prop="ygnl" >
            </el-table-column>
            <el-table-column :label="yisheng5" prop="dzyx">
            </el-table-column>
            <el-table-column  :label="yisheng6" prop="ygdh" >
            </el-table-column>
            <el-table-column :label="yisheng7" prop="ksbh"  >
            </el-table-column>
            <el-table-column :label="yisheng8" prop="ygjs" >
            </el-table-column>
             <el-table-column :label="yisheng9" prop="ygzw">
            </el-table-column>
            <el-table-column  :label="yisheng10" prop="qxdj" :formatter="formatRole1" >
            </el-table-column>
            <el-table-column :label="yisheng11" prop="ygjj">
            </el-table-column>

        </el-table>
    
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/keshi4.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"科室编号",
     label2:"科室名称",
     label3:"科室地址",
     label4:"科室简介",
     
      //表格数据
                tableData: [
                    {
               ksbh: '',
					ksmc: '',
					ksdz: '',
					ksjj: '', 
                     },
                    
                ],
      VO: { 
        	      ksbh: '',
					ksmc: '',
					ksdz: '',
					ksjj: '',
       },
        VO1: { 
        	      ksbh: '',
					ksmc: '',
					ksdz: '',
					ksjj: '',
       },
               
                ksbh : '',
                ksmc :'',
                currentPage1: 1,
                total: 0,
                page: 1,
                pageSize: 10,
                pageNum:1,


                dialogVisible: false,
                dialogVisible1: false,
                dialogVisibleyi: false,
                yisheng1:"员工编号",
                yisheng2:"员工姓名",
                yisheng3:"员工性别",
                yisheng4:"员工年龄",
                yisheng5:"电子邮箱",
                yisheng6:"员工电话",
                yisheng7:"科室编号",
                yisheng8:"员工角色",
                yisheng9:"员工职位",
                yisheng10:"权限等级",
                yisheng11:"员工简介",
                yisheng12:"员工密码",
      //表格数据
                tableDatayi: [
                    {
               	ygbh: '',
					ygxm: '',
					ygxb: '',
					ygnl: '',

					dzyx:'',
					ygdh:'',
					ksbh:'',
					ygjs: '',

					ygzw: '',
					qxdj: '',
					ygjj: '',
					yhmm:'',
                     },
                    
                ],
      VOyi: { 
        	       	ygbh: '',
					ygxm: '',
					ygxb: '',
					ygnl: '',

					dzyx:'',
					ygdh:'',
					ksbh:'',
					ygjs: '',

					ygzw: '',
					qxdj: '',
					ygjj: '',
					yhmm:'',
       },
            }
        },

         created() {
            this.getUser();
},
    mounted () {
            this.getUser();
        },
        methods: {
             //角色转换
                formatRole: function(row, column) {
                return row.sex == '1' ? "男" : "女";
                },

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
							ksbh: this.VO1.ksbh,
							ksmc: this.VO1.ksmc,
							ksdz: this.VO1.ksdz,
							ksjj: this.VO1.ksjj,

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
                        Api.deleteById(this.msg.ksbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let ksbh=this.VO.ksbh;
                        Api.selectById(ksbh).then(res=>{

                             let tableData1=[
                                    {
                    	    ksbh: res.data.ksbh,
							ksmc: res.data.ksmc,
							ksdz: res.data.ksdz,
							ksjj: res.data.ksjj, 
                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let ksmc=this.VO.ksmc;
                        Api.selectByName(ksmc).then(res=>{

                             let tableData1=[
                                    {
                             ksbh: res.data.ksbh,
							ksmc: res.data.ksmc,
							ksdz: res.data.ksdz,
							ksjj: res.data.ksjj, 
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
Api. UserList (para).then(res=>{
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



  //角色转换
                formatRole: function(row, column) {
                return row.ygxb == '1' ? "男" : "女";
                },
//角色转换
                formatRole1: function(row, column) {
      return row.qxdj == '0' ? "管理员权限" : row.qxdj == '1' ? "权限等级1" : row.qxdj == '2' ? "权限等级2": row.qxdj == '3' ? "权限等级3" : "权限等级4";
              
                },
                        
    //修改页面显示
        updateyi(index, row) {
            this.idx = index;
            this.VO1=row;
            this.ksbh=this.VO1.ksbh;
            this.dialogVisibleyi = true;

            let para={
                ksbh:this.VO1.ksbh,
                pageNum:this.pageNum,
                pageSize:this.pageSize,
            };
            Api.selectByksbh(para).then(res=>{
                this.tableDatayi=res.data.list;
            })
        },
         //修改页面不显示
        noupdateyi () { 
            this.dialogVisibleyi = false;
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

