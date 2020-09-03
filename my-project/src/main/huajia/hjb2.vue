 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row >
             <el-col :span="24">
                 <el-form ref="VO" :model="VO" label-width="80px"  size="mini" style="margin:0px;width:60%;height:10px;">
                <el-col :span="16">
                        <el-form-item :label="label2" prop="jzkh">
                    <el-input v-model="VO.jzkh"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="4">
                     <el-form-item >
                      <el-button type="primary" icon="el-icon-news" size="mini" @click="selectByName">查询</el-button>
                    </el-form-item>
                </el-col>
                 <el-col :span="4">
                     <el-form-item >
                      <el-button type="primary" icon="el-icon-news" size="mini" @click="drawLine">显示图表信息</el-button>
                    </el-form-item>
                </el-col>
                </el-form>
 </el-col>

        </el-row>
    
         <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
           
             <el-table-column :label="label2" prop="jzkh" >
            </el-table-column>
             <el-table-column  :label="label3" prop="jfje" >
            </el-table-column>
            <el-table-column :label="label4" prop="jflx"  :formatter="formatRole1">
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
            
                    <el-form ref="VO1" :model="VO1" label-width="90px"  style="margin:5px;width:80%;">
                          
															<el-form-item :label="label2" prop="jzkh">
                                                                 <span style="float:left;">{{VO1.jzkh}}</span>
													</el-form-item>
															<el-form-item :label="label3" prop="jfje">
														<el-input v-model="VO1.jfje" ></el-input>
													</el-form-item>
															<el-form-item :label="label4" prop="jflx">
                                                                	<el-select v-model="VO1.jflx" placeholder="请选择缴费类型"  style="width:100%;">
                                                                            <el-option label="挂号费用" value="1"></el-option>
                                                                            <el-option label="检查费用" value="2"></el-option>
                                                                            
                                                                            <el-option label="处方费用" value="3"></el-option>
                                                                    </el-select>
													</el-form-item>
												
                            <el-form-item >
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updatefor">修改检查项目信息</el-button>
                                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
                        </el-form>
   </el-dialog>
 <div id='myChart' style='width：400px;height:300px'></div>
   </div>
       
   </template>
   
<script>

import Api from '@/apis/huajia3.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
      label1:"id",
     label2:"就诊卡号",
     label3:"缴费金额￥",
     label4:"缴费类型",
     
      //表格数据
                tableData: [
                    {
              	                id: '',
								jzkh: '',
								jfje: '',
								jflx: '',
                     },
                    
                ],
      VO: { 
        	      	id: '',
					jzkh: '',
					jfje: '',
					jflx: '',
       },
        VO1: { 
        	      	id: '',
					jzkh: '',
					jfje: '',
					jflx: '',
       },
               nowTime:'',
               id: '',
            jzkh: '',
                currentPage1: 1,
                total: 0,
                page: 1,
                pageSize: 10,
                pageNum:1,


                dialogVisible: false,
                dialogVisible1: false,
             
                    jflx1: 0,
                    jflx2: 0,
                    jflx3: 0,
                  
           
            }
        },

         created() {
            this.getUser();
},
    mounted () {
            this.getUser();
           this.drawLine();
        },
        methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '收入信息柱状图：' },
            tooltip: {},
            xAxis: {
                data: ["挂号费用","检查费用","处方费用"]
            },
            yAxis: {},
            series: [{
                name: '收入',
                type: 'bar',
                data:[this.jflx1, this.jflx2,  this.jflx3],
            }]
        });
    },
  
 formatRole1: function(row, column) {
      return row.jflx == '1' ? "挂号费用" : row.jflx == '2' ? "检查费用"  : "处方费用";
              
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
							id: this.VO1.id,
							jzkh: this.VO1.jzkh,
							jfje: this.VO1.jfje,
							jflx: this.VO1.jflx,

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
                        Api.deleteById(this.msg.id).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
                        });
                        },


       //就诊卡号查询
                        selectById(VO){
                         let id=this.VO.id;
                        Api.selectById(id).then(res=>{

                             let tableData1=[
                                    {
                    		id: res.data.id,
												jzkh: res.data.jzkh,
												jfje: res.data.jfje,
												jflx: res.data.jflx,

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
                                id: res.data.id,
															jzkh: res.data.jzkh,
															jfje: res.data.jfje,
															jflx: res.data.jflx,
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
Api. selectjflx().then(res=>{
    
    this.jflx1=res.data.jflx1;
    this.jflx2=res.data.jflx2;
    this.jflx3=res.data.jflx3;
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

