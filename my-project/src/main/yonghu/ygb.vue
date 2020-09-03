 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="ygbh" >
                            <el-input v-model="VO.ygbh" value="1"></el-input>
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
                        <el-form-item :label="label2" prop="ygxm">
                    <el-input v-model="VO.ygxm"></el-input>
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
            <el-table-column :label="label1" prop="ygbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="ygxm" >
            </el-table-column>
            <el-table-column :label="label3" prop="ygxb" :formatter="formatRole">
            </el-table-column>
            <el-table-column  :label="label4" prop="ygnl" >
            </el-table-column>
            <el-table-column :label="label5" prop="dzyx">
            </el-table-column>
            <el-table-column  :label="label6" prop="ygdh" >
            </el-table-column>
            <el-table-column :label="label7" prop="ksbh"  :formatter="formatRole2">
            </el-table-column>
            <el-table-column :label="label8" prop="ygjs" >
            </el-table-column>
             <el-table-column :label="label9" prop="ygzw">
            </el-table-column>
            <el-table-column  :label="label10" prop="qxdj" :formatter="formatRole1" >
            </el-table-column>
            <el-table-column :label="label11" prop="ygjj">
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
                           <el-row :gutter="10">
                             
  <el-col :span="12">
                <el-form-item :label="label1" prop="ygbh">
						   <span style="float:left;">{{VO1.ygbh}}</span>
				</el-form-item>
				<el-form-item :label="label2" prop="ygxm">
                     <span style="float:left;">{{VO1.ygxm}}</span>
				</el-form-item>
				<el-form-item :label="label3" prop="ygxb">
                    
						<el-select v-model="VO1.ygxb" placeholder="请选择性别"  style="width:100%;">
								<el-option label="男" value="1"></el-option>
								<el-option label="女" value="0"></el-option>
						</el-select>
				</el-form-item>
				
					<el-form-item :label="label4" prop="ygnl">
							<el-input v-model="VO1.ygnl" ></el-input>
					</el-form-item>
					<el-form-item :label="label5" prop="dzyx">
						<el-input v-model="VO1.dzyx"></el-input>
					</el-form-item>
					
    </el-col>
     <el-col :span="12">
                 <el-form-item :label="label6" prop="ygdh">
						<el-input v-model="VO1.ygdh"></el-input>
				</el-form-item>
			 	 <el-form-item :label="label7" prop="ksbh">
					<el-select v-model="VO1.ksbh" placeholder="请选择挂号科室"  style="width:100%;">
				<el-option label="骨科" value="1"></el-option>
				<el-option label="儿科" value="2"></el-option>
				<el-option label="牙科" value="3"></el-option>
				<el-option label="神经外科" value="4"></el-option>
			</el-select>
				</el-form-item>
				<el-form-item :label="label8" prop="ygjs">
						<el-input v-model="VO1.ygjs"></el-input>
				</el-form-item>
				<el-form-item :label="label9" prop="ygzw">
						<el-input v-model="VO1.ygzw"></el-input>
				</el-form-item>
                <el-form-item :label="label11" prop="ygjj">
						<el-input v-model="VO1.ygjj"></el-input>
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

import Api from '@/apis/yonghu9.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"员工编号",
     label2:"员工姓名",
     label3:"员工性别",
     label4:"员工年龄",
     label5:"电子邮箱",
     label6:"员工电话",
     label7:"科室编号",
     label8:"员工角色",
     label9:"员工职位",
     label10:"权限等级",
     label11:"员工简介",
     label12:"员工密码",
      //表格数据
                tableData: [
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
					ygmm:'',
                     },
                    
                ],
      VO: { 
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
					ygmm:'',
       },
        VO1: { 
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
					ygmm:'',
       },
               
                	ygbh: '',
					ygxm: '',
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
             //角色转换
                formatRole: function(row, column) {
                return row.ygxb == '1' ? "男" : "女";
                },
//角色转换
                formatRole1: function(row, column) {
      return row.qxdj == '0' ? "管理员权限" : row.qxdj == '1' ? "权限等级1" : row.qxdj == '2' ? "权限等级2": row.qxdj == '3' ? "权限等级3" : "权限等级4";
              
                },

  formatRole2: function(row, column) {
      return row.ksbh == '1' ? "骨科" : row.ksbh == '2' ? "儿科" : row.ksbh == '3' ? "牙科": "神经外科";
              
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
							ygbh: this.VO1.ygbh,
							ygxm: this.VO1.ygxm,
							ygxb: this.VO1.ygxb,
							ygnl: this.VO1.ygnl,

							dzyx: this.VO1.dzyx,
							ygdh: this.VO1.ygdh,
							ksbh: this.VO1.ksbh,
							ygjs: this.VO1.ygjs,

							ygzw: this.VO1.ygzw,
							qxdj: this.VO1.qxdj,
							ygjj: this.VO1.ygjj,
							ygmm: this.VO1.ygmm,

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
                        Api.deleteById(this.msg.ygbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let ygbh=this.VO.ygbh;
                        Api.selectById(ygbh).then(res=>{

                             let tableData1=[
                                    {
                            ygbh:res.data.ygbh,
							ygxm: res.data.ygxm,
							ygxb: res.data.ygxb,
							ygnl: res.data.ygnl,

							dzyx:res.data.dzyx,
							ygdh: res.data.ygdh,
							ksbh: res.data.ksbh,
							ygjs: res.data.ygjs,

							ygzw: res.data.ygzw,
							qxdj: res.data.qxdj,
							ygjj:res.data.ygjj,
							ygmm:res.data.ygmm, 
                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let ygxm=this.VO.ygxm;
                        Api.selectByName(ygxm).then(res=>{

                             let tableData1=[
                                    {
                            ygbh: res.data.ygbh,
							ygxm: res.data.ygxm,
							ygxb: res.data.ygxb,
							ygnl: res.data.ygnl,

							dzyx: res.data.dzyx,
							ygdh: res.data.ygdh,
							ksbh: res.data.ksbh,
							ygjs: res.data.ygjs,

							ygzw: res.data.ygzw,
							qxdj: res.data.qxdj,
							ygjj:res.data.ygjj,
							ygmm:res.data.ygmm, 
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

