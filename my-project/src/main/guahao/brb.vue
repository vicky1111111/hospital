 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="brbVO" :model="brbVO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="jzkh" >
                            <el-input v-model="brbVO.jzkh" value="1"></el-input>
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
                <el-form ref="brbVO" :model="brbVO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                <el-col :span="20">
                        <el-form-item :label="label3" prop="hzxm">
                    <el-input v-model="brbVO.hzxm"></el-input>
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
            <el-table-column :label="label1" prop="jzkh" >
            </el-table-column>
             <el-table-column  :label="label3" prop="hzxm" >
            </el-table-column>
            <el-table-column :label="label4" prop="hzxb" :formatter="formatRole">
            </el-table-column>

            <el-table-column  :label="label5" prop="hznl" >
            </el-table-column>
            <el-table-column :label="label6" prop="lxdh"  >
            </el-table-column>

            <el-table-column :label="label7" prop="jtzz" >
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
            
                    <el-form ref="brbVO1" :model="brbVO1" label-width="80px"  style="margin:5px;width:90%;">
                           
                            <el-form-item :label="label1" prop="jzkh">
                                    <span style="float:left;">{{brbVO1.jzkh}}</span>
                            </el-form-item>
                          
                            <el-form-item :label="label2" prop="sfzh">
                                <span style="float:left;">{{brbVO1.sfzh}}</span>
                            </el-form-item>
                            
                             <el-form-item :label="label3" prop="hzxm">
                                  <span style="float:left;">{{brbVO1.hzxm}}</span>
                            </el-form-item>
                           
                             <el-form-item :label="label5" prop="hznl">
                                <el-input v-model="brbVO1.hznl"></el-input>
                            </el-form-item>
                            <el-form-item :label="label4" prop="hzxb">
                                <el-select v-model="brbVO1.hzxb" placeholder="请选择性别"  style="width:100%;">
                                    <el-option label="男" value="1"></el-option>
                                    <el-option label="女" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                       
                            <el-form-item :label="label6" prop="lxdh">
                                    <el-input v-model="brbVO1.lxdh"></el-input>
                                </el-form-item>
                            <el-form-item :label="label7" prop="jtzz">
                                <el-input v-model="brbVO1.jtzz"></el-input>
                            </el-form-item>
                           
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改就诊卡信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/brb.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"就诊卡号",
     label2:"身份证号",
     label3:"患者姓名",
     label4:"患者性别",
     label5:"患者年龄",
     label6:"联系电话",
     label7:"家庭住址",
      //表格数据
                tableData: [
                    {
                jzkh: '',
                sfzh: '',
                hzxm: '',
                hzxb: '',
                hznl:'',
                lxdh:'',
                jtzz:'', 
                     },
                    
                ],
      brbVO: { 
        	        jzkh: '',
					sfzh: '',
					hzxm: '',
					hzxb: '',
					hznl:'',
					lxdh:'',
					jtzz:'',
       },
        brbVO1: { 
        	        jzkh: '',
					sfzh: '',
					hzxm: '',
					hzxb: '',
					hznl:'',
					lxdh:'',
					jtzz:'',
       },
               
                jzkh : '',
                hzxm :'',
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
                return row.hzxb == '1' ? "男" : "女";
                },

    //修改页面显示
        update(index, row) {
            this.idx = index;
            this.brbVO1=row;
            this.dialogVisible1 = true;
        },
         //修改页面不显示
        noupdate () {
            this.dialogVisible1 = false;
            this.$refs['brbVO1'].clearValidate() 
        },
         //修改键功能
                 
        updatefor(brbVO1) {
                    let brbVO11 = { 	
							jzkh: this.brbVO1.jzkh,
							sfzh: this.brbVO1.sfzh,
							hzxm: this.brbVO1.hzxm,
							hzxb: this.brbVO1.hzxb,
							hznl:this.brbVO1.hznl,
							lxdh: this.brbVO1.lxdh,
							jtzz: this.brbVO1.jtzz,

                        }
                    Api.update(brbVO11).then(res => {
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
                        Api.deleteById(this.msg.jzkh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(brbVO){
                         let jzkh=this.brbVO.jzkh;
                        Api.selectById(jzkh).then(res=>{

                             let tableData1=[
                                    {
                                jzkh: res.data.jzkh,
                                sfzh: res.data.sfzh,
                                hzxm: res.data.hzxm,
                                hzxb: res.data.hzxb,
                                hznl:res.data.hznl,
                                lxdh:res.data.lxdh,
                                jtzz:res.data.jtzz, 
                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(brbVO){
                         let hzxm=this.brbVO.hzxm;
                        Api.selectByName(hzxm).then(res=>{

                             let tableData1=[
                                    {
                                jzkh: res.data.jzkh,
                                sfzh: res.data.sfzh,
                                hzxm: res.data.hzxm,
                                hzxb: res.data.hzxb,
                                hznl:res.data.hznl,
                                lxdh:res.data.lxdh,
                                jtzz:res.data.jtzz, 
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

