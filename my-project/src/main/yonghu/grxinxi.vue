 <!-- 编辑页面 -->
<template>
    <div id="users"  >
            <el-form ref="VO1" :model="VO" label-width="80px"  style="margin-left:300px;width:50%;">
                           <el-row :gutter="5">
                             
                    <el-col :span="12">
                <el-form-item :label="label1" prop="ygbh">
						   <span style="float:left;">{{VO.ygbh}}</span>
				</el-form-item>
				<el-form-item :label="label2" prop="ygxm">
                     <span style="float:left;">{{VO.ygxm}}</span>
				</el-form-item>
				<el-form-item :label="label3" prop="ygxb">
                     <span style="float:left;">{{VO.ygxb}}</span>
				</el-form-item>
				
					<el-form-item :label="label4" prop="ygnl">
                        
                     <span style="float:left;">{{VO.ygnl}}</span>
					</el-form-item>
					<el-form-item :label="label5" prop="dzyx">
                     <span style="float:left;">{{VO.dzyx}}</span>
					</el-form-item>
					
    </el-col>
     <el-col :span="12">
                 <el-form-item :label="label6" prop="ygdh">
                     <span style="float:left;">{{VO.ygdh}}</span>
				</el-form-item>
			 	 <el-form-item :label="label7" prop="ksbh">
                     <span style="float:left;">{{VO.ksbh}}</span>
				</el-form-item>
				<el-form-item :label="label8" prop="ygjs">
                     <span style="float:left;">{{VO.ygjs}}</span>
				</el-form-item>
				<el-form-item :label="label9" prop="ygzw">
                     <span style="float:left;">{{VO.ygzw}}</span>
				</el-form-item>
                <el-form-item :label="label11" prop="ygjj">
                     <span style="float:left;">{{VO.ygjj}}</span>
				</el-form-item>
					
				
    </el-col>
</el-row>
                        </el-form>
                                    <el-button  icon="el-icon-edit" size="mini" style="margin-left:0px;width:50%;"  @click="update">修改个人信息</el-button>
                                   
         
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
						<el-input v-model="VO1.ksbh"></el-input>
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
                 <el-form-item :label="label12" prop="ygmm">
						<el-input v-model="VO1.ygmm"></el-input>
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
            this. selectById();
},
    mounted () {
            this. selectById();
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

    //修改页面显示
        update() {
            this.VO1=this.VO;
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
                   
            this. selectById();
                                                      this.noupdate ();
                    }).catch(err => {
                                                                console.log(err)
                                                                
            this. selectById();
                    });
                    },
                                
                          //删除键功能
                        deleteById(index,row){
                        this.idx=index;
                        this.msg=row;
                        Api.deleteById(this.msg.ygbh).then(res=>{
                            
            this. selectById();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     
            this. selectById();
                        });
                        },


       //就诊卡号查询
                        selectById(){
                         let ygbh= localStorage.getItem("ygbh");
                        Api.selectById(ygbh).then(res=>{
                             this.VO.ygbh=res.data.ygbh,
							 this.VO.ygxm= res.data.ygxm,
							 this.VO.ygxb= res.data.ygxb,
							 this.VO.ygnl= res.data.ygnl,

							 this.VO.dzyx=res.data.dzyx,
							 this.VO.ygdh= res.data.ygdh,
							 this.VO.ksbh= res.data.ksbh,
							 this.VO.ygjs= res.data.ygjs,

							 this.VO.ygzw= res.data.ygzw,
							 this.VO.qxdj= res.data.qxdj,
							 this.VO.ygjj=res.data.ygjj,
							 this.VO.ygmm=res.data.ygmm;
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

