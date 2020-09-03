 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="12">
                <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                 
                <el-col :span="20">
                        <el-form-item :label="label1" prop="blbh" >
                            <el-input v-model="VO.blbh" value="1"></el-input>
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
                        <el-form-item :label="label2" prop="jzkh">
                    <el-input v-model="VO.jzkh"></el-input>
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
            <el-table-column :label="label1" prop="blbh" >
            </el-table-column>
              <el-table-column :label="label2" prop="jzkh" >
            </el-table-column>
             <el-table-column  :label="label3" prop="zdrq" >
            </el-table-column>
            <el-table-column :label="label4" prop="ygbh">
            </el-table-column>

            <el-table-column  :label="label5" prop="zdjg" >
            </el-table-column>
            <el-table-column :label="label6" prop="zlff"  >
            </el-table-column>

            <el-table-column :label="label7" prop="cfbh" >
            </el-table-column>
              <el-table-column :label="label8" >
                  <template  slot-scope="scope">
                        <img src="@/assets/upload/201905271904521.png"
                         style="width: 50px;height:50px" referrer="no-referrer" class="picture"/>
                    </template>
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
                           
                            <el-form-item :label="label1" prop="blbh">
                                    <span style="float:left;">{{VO1.blbh}}</span>
                            </el-form-item>
                          
                            <el-form-item :label="label2" prop="jzkh">
                                <span style="float:left;">{{VO1.jzkh}}</span>
                            </el-form-item>
                            
                             <el-form-item :label="label3" prop="zdrq">
                                  <el-date-picker
                                    style="width:100%;"
                                    v-model="VO1.zdrq"
                                    type="date"
                                    placeholder="选择日期">
                                    </el-date-picker>
                            </el-form-item>
                            <el-form-item :label="label4" prop="ygbh">
                                 <el-input v-model="VO1.ygbh"></el-input>
                            </el-form-item>
                             <el-form-item :label="label5" prop="zdjg">
                                <el-input v-model="VO1.zdjg"></el-input>
                            </el-form-item>
                           
                       
                            <el-form-item :label="label6" prop="zlff">
                                    <el-input v-model="VO1.zlff"></el-input>
                                </el-form-item>
                            <el-form-item :label="label7" prop="cfbh">
                                <el-input v-model="VO1.cfbh"></el-input>
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
import Api from '@/apis/bingli6.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
    label1:"病历编号",
     label2:"就诊卡号",
     label3:"诊断时间",
     label4:"员工编号",
     label5:"诊断结果",
     label6:"治疗方法",
     label7:"处方编号",
      label8:"病历图片",
      //表格数据
                tableData: [
                    {
               	    blbh: '',
					jzkh: '',
					zdrq: '',
					ygbh: '',
					zdjg:'',
					zlff:'',
                    cfbh:'',
                    	picture:'',
                     },
                    
                ],
      VO: { 
        	        blbh: '',
					jzkh: '',
					zdrq: '',
					ygbh: '',
					zdjg:'',
					zlff:'',
                    cfbh:'',
                    	picture:'',
       },
        VO1: { 
        	        blbh: '',
					jzkh: '',
					zdrq: '',
					ygbh: '',
					zdjg:'',
					zlff:'',
                    cfbh:'',
                    	picture:'',
       },
               	picture:'',
                blbh : '',
                zdrq :'',
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
							blbh: this.VO1.blbh,
							jzkh: this.VO1.jzkh,
							zdrq: this.VO1.zdrq,
							ygbh: this.VO1.ygbh,
							zdjg: this.VO1.zdjg,
							zlff: this.VO1.zlff,
                            cfbh: this.VO1.cfbh,
							picture: this.VO.picture,

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
                        Api.deleteById(this.msg.blbh).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let blbh=this.VO.blbh;
                        Api.selectById(blbh).then(res=>{

                             let tableData1=[
                                    {
                                blbh: res.data.blbh,
                                jzkh: res.data.jzkh,
                                zdrq: res.data.zdrq,
                                ygbh: res.data.ygbh,
                                zdjg:res.data.zdjg,
                                zlff:res.data.zlff,
                                cfbh:res.data.cfbh, 
                                picture:res.data.picture,
                                     },
                                    
                                ]
                this.tableData=tableData1;
                            console.log(res);
                        }).catch(err => {
                                            console.log(err)
                        });
                        },
                        selectByName(VO){
                         let jzkh=this.VO.jzkh;
                        Api.selectByName(jzkh).then(res=>{

                             let tableData1=[
                                    {
                                blbh: res.data.blbh,
                                jzkh: res.data.jzkh,
                                zdrq: res.data.zdrq,
                                ygbh: res.data.ygbh,
                                zdjg:res.data.zdjg,
                                zlff:res.data.zlff,
                                cfbh:res.data.cfbh, 
                                
                                picture:res.data.picture,
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

