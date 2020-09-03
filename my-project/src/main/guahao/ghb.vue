 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="ghbVO" :model="ghbVO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="ghbh" >
                            <el-input v-model="ghbVO.ghbh" value="1"></el-input>
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
                <el-form ref="ghbVO" :model="ghbVO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                <el-col :span="20">
                        <el-form-item :label="label2" prop="jzkh">
                    <el-input v-model="ghbVO.jzkh"></el-input>
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
            <el-table-column :label="label1" prop="ghbh" >
            </el-table-column>
             <el-table-column :label="label2" prop="jzkh" >
            </el-table-column>
             <el-table-column  :label="label3" prop="ksbh" :formatter="formatRole1">
            </el-table-column>
            <el-table-column :label="label4" prop="ghlx" :formatter="formatRole">
            </el-table-column>

            <el-table-column  :label="label5" prop="ghrq" >
            </el-table-column>
            <el-table-column :label="label6" prop="ghfy"  >
            </el-table-column>

            <el-table-column :label="label7" prop="bzxx" >
            </el-table-column>
            <el-table-column :label="label8" prop="czry" >
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
            
                    <el-form ref="ghbVO1" :model="ghbVO1" label-width="80px"  style="margin:5px;width:90%;">
                          <el-row :gutter="10">
  

                        <el-col :span="12">
                        <el-form-item :label="label1" prop="ghbh">
                              <span style="float:left;">{{ghbVO1.ghbh}}</span>
                                </el-form-item>
                                
                                <el-form-item :label="label2" prop="jzkh">
                                    
                              <span style="float:left;">{{ghbVO1.jzkh}}</span>
                                </el-form-item>
                                <el-form-item :label="label3" prop="ksbh">
                                   	<el-select v-model="ghbVO1.ksbh" placeholder="请选择挂号科室"  style="width:100%;">
				<el-option label="骨科" value="1"></el-option>
				<el-option label="儿科" value="2"></el-option>
				<el-option label="牙科" value="3"></el-option>
				<el-option label="神经外科" value="4"></el-option>
			</el-select>
                                </el-form-item>
                                <el-form-item :label="label4" prop="ghlx">
                                    <el-select v-model="ghbVO1.ghlx" placeholder="请选择挂号类型"  style="width:100%;">
                                        <el-option label="普通挂号" value="0"></el-option>
                                        <el-option label="急诊挂号" value="1"></el-option>
                                        <el-option label="专家挂号" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                        
                                <el-form-item :label="label5" prop="ghrq">
                                <el-date-picker
                                style="width:100%;"
                                v-model="ghbVO1.ghrq"
                                type="date"
                             :placeholder="ghbVO1.ghrq">
                                </el-date-picker>
                                </el-form-item>
                                <el-form-item :label="label6" prop="ghfy">
                                        <el-input v-model="ghbVO1.ghfy" ></el-input>
                                    </el-form-item>
                                <el-form-item :label="label7" prop="bzxx">
                                    <el-input v-model="ghbVO1.bzxx"></el-input>
                                </el-form-item>
                            <el-form-item :label="label8" prop="czry">
                                    <el-input v-model="ghbVO1.czry"></el-input>
                                </el-form-item>
                                </el-col>
                        </el-row>
                           
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改就诊卡信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/guahao1.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
     label1:"挂号编号",
     label2:"就诊卡号",
     label3:"挂号科室",
     label4:"挂号类型",
     label5:"挂号日期",
     label6:"挂号费用",
     label7:"备注信息",
     label8:"员工编号",
     
      //表格数据
                tableData: [
                    {
               ghbh: '',
                jzkh: '',
                ksbh: '',
                ghlx: '',
                ghrq:'',
                ghfy:'',
                bzxx:'',
                czry:'',
                     },
                    
                ],
      ghbVO: { 
        	      ghbh: '',
            jzkh: '',
            ksbh: '',
            ghlx: '',
            ghrq:'',
            ghfy:'',
            bzxx:'',
            czry:'',
       },
        ghbVO1: { 
        	       ghbh: '',
            jzkh: '',
            ksbh: '',
            ghlx: '',
            ghrq:'',
            ghfy:'',
            bzxx:'',
            czry:'',
       },
               nowTime:'',
               ghbh: '',
            jzkh: '',
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
                if (this.tableData!=null) {
                     return row.ghlx == '0' ? "普通挂号" : row.ghlx == '1' ? "急诊挂号" : row.ghlx == '2' ? "专家挂号":null;
                
                }   },
  formatRole1: function(row, column) {
      return row.ksbh == '1' ? "骨科" : row.ksbh == '2' ? "儿科" : row.ksbh == '3' ? "牙科": "神经外科";
              
                },
    //修改页面显示
        update(index, row) {
            this.idx = index;
            this.ghbVO1=row;
            this.dialogVisible1 = true;
        },
         //修改页面不显示
        noupdate () {
            this.dialogVisible1 = false;
            this.$refs['ghbVO1'].clearValidate() 
        },
         //修改键功能
                 
        updatefor(ghbVO1) {
                    let ghbVO11 = { 	
							ghbh: this.ghbVO1.ghbh,
							jzkh: this.ghbVO1.jzkh,
							ksbh: this.ghbVO1.ksbh,
							ghlx: this.ghbVO1.ghlx,
							ghrq:this.ghbVO1.ghrq,
							ghfy: this.ghbVO1.ghfy,
                            bzxx: this.ghbVO1.bzxx,
                            czry: this.ghbVO1.czry,


                        }
                    Api.update(ghbVO11).then(res => {
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
                        Api.deleteById(this.msg.ghbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(ghbVO){
                         let ghbh=this.ghbVO.ghbh;
                        Api.selectById(ghbh).then(res=>{

                             let tableData1=[
                                    {
                    		ghbh: res.data.ghbh,
							jzkh: res.data.jzkh,
							ksbh: res.data.ksbh,
							ghlx: res.data.ghlx,
							ghrq:res.data.ghrq,
							ghfy: res.data.ghfy,
                            bzxx: res.data.bzxx,
                            czry: res.data.czry,

                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(ghbVO){
                         let jzkh=this.ghbVO.jzkh;
                        Api.selectByName(jzkh).then(res=>{

                             let tableData1=[
                                    {
                            ghbh: res.data.ghbh,
							jzkh: res.data.jzkh,
							ksbh: res.data.ksbh,
							ghlx: res.data.ghlx,
							ghrq:res.data.ghrq,
							ghfy: res.data.ghfy,
                            bzxx: res.data.bzxx,
                            czry: res.data.czry,
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

