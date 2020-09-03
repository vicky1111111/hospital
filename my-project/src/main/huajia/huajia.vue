 <!-- 编辑页面 -->
<template>
    <div id="users"  >

                
         <el-row >
             
             <el-col :span="24">
                  <el-form ref="cfVO" :model="cfVO" label-width="80px"  size="mini" style="margin:0px;width:90%;height:10px;">
                     <el-col :span="6">
                              <span style="float:left;">输入处方编号获取缴费信息：</span>
                    </el-col>
                    <el-col :span="6">
                            <el-form-item label="处方编号" prop="cfbh" >
                                <el-input v-model="cfVO.cfbh" value="1"></el-input>
                            </el-form-item>
                    </el-col>
                    <el-col :span="6">
                   
                        <el-button style="" type="primary" icon="el-icon-news" size="mini" @click="cfgetUser">确认编号</el-button>
                   
                    </el-col>
                    </el-form>
                </el-col>
        </el-row>
        
          <el-row >
              <el-col :span="4">
                    <span style="">处方编号 ：</span>
                     <span style="">{{cfbh}}</span>
            </el-col>
              <el-col :span="10">
                   <span style="">就诊卡号 ：</span>
                     <span style="">{{jzkh}}</span>
            </el-col>
            
             <el-col :span="24">
                   <p style="float:left;"> </p>
            </el-col>
             <el-col :span="24">
                   <span style="float:left;">处方药品如下 ：</span>
            </el-col>
            </el-row>
         <!--表格数据及操作-->
        <el-table :data="cftableData" size="mini" border  style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >
            <!--索引-->
            <el-table-column :label="label1a" prop="ypbh" >
            </el-table-column>
             <el-table-column :label="label2a" prop="ypmc" >
            </el-table-column>
            <el-table-column :label="label3a" prop="ypgn">
            </el-table-column>
             <el-table-column  :label="label4a" prop="ypjg">
            </el-table-column>
            <el-table-column :label="label5a" prop="ypkc">
            </el-table-column>
            <el-table-column  :label="label6a" prop="scdw" >
            </el-table-column>
            <el-table-column :label="label7a" prop="scrq"  >
            </el-table-column>
            <el-table-column :label="label8a" prop="gqrq" >
            </el-table-column>
             <el-table-column label="药品数量" prop="ypsl" >
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
          <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
         <el-row >
              <el-col :span="24">
                        <el-col :span="4">
                            <span style="float：left">合计：￥</span>
                            <span style="">{{money}}</span>
                        </el-col>
                         <el-col :span="4">
                            <el-button style="" type="primary" icon="el-icon-news" size="mini" @click="insertshouru">缴费</el-button>
                   
                        </el-col>
            </el-col>
            
            </el-row>
   </div>
       
   </template>
   
<script>

import hjApi from '@/apis/huajia3.js'
import cfApi from '@/apis/chufang7.js'
import brApi from '@/apis/brb.js'
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


 label1a:"药品编号",
        label2a:"药品名称",
        label3a:"药品功能",
        label4a:"药品价格",
        label5a:"药品库存",
        label6a:"生产单位",
		 label7a:"生产日期",
         label8a:"过期日期",
         
      //表格数据
                cftableData: [
                    {
                    id: '',
					cfbh: '',
					jzkh: '',
					ygbh: '',
                    ypbh: '',

                    ypsl:'',
					ypmc: '',
					ypgn: '',
                    ypjg: '',
                    ypkc:'',
                    
					scdw:'',
					scrq:'',
					gqrq: '',

                     },
                    
                ],
      cfVO: { 	
          id: '',
					cfbh: '',
					jzkh: '',
					ygbh: '',
                    ypbh: '',
                    
                    ypsl:'',
					ypmc: '',
					ypgn: '',
                    ypjg: '',
                    ypkc:'',
                    
					scdw:'',
					scrq:'',
					gqrq: '',

       },
        cfVO1: { 
        	       	id: '',
					cfbh: '',
					jzkh: '',
					ygbh: '',
                    ypbh: '',
                    
                    ypsl:'',
					ypmc: '',
					ypgn: '',
                    ypjg: '',
                    ypkc:'',
                    
					scdw:'',
					scrq:'',
					gqrq: '',

       },
       cfbh: '',
					jzkh: '',
                    ygbh: '',
                        nullts: '',
                        hzxm: '',
                        money:'',
               
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
            this.cfVO1=row;
            this.dialogVisible1 = true;
        },
         //修改页面不显示
        noupdate () {
            this.dialogVisible1 = false;
            this.$refs['cfVO1'].clearValidate() 
        },
         //修改键功能
                 
        updatefor(cfVO1) {
                    let VO11 = { 	
                            id: this.cfVO1.id,
                            cfbh: this.cfVO1.cfbh,
                            jzkh: this.cfVO1.jzkh,
                            ygbh: this.cfVO1.ygbh,
                            ypbh: this.cfVO1.ypbh,
                            
                            ypsl: this.cfVO1.ypsl,
							ypmc: this.cfVO1.ypmc,
							ypgn: this.cfVO1.ypgn,
							ypjg: this.cfVO1.ypjg,

							ypkc: this.cfVO1.ypkc,
							scdw: this.cfVO1.scdw,
							scrq: this.cfVO1.scrq,
							gqrq: this.cfVO1.gqrq,

						

                        }
                    cfApi.update(VO11).then(res => {
                    console.log(res);
                     this.cfgetUser();
                                                      this.noupdate ();
                    }).catch(err => {
                                                                console.log(err)
                                                                   this.cfgetUser();
                    });
                    },
                                
                          //删除键功能
                        deleteById(index,row){
                        this.idx=index;
                        this.msg=row;
                        let para={
                            cfbh:this.cfVO.cfbh,
                            ypbh:this.msg.ypbh,
                        };
                      
                        cfApi.deleteById(para).then(res=>{
                            this.cfgetUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.cfgetUser();
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



  insert(index, row) {
            this.idx = index;
            this.VO1=row;
        let cfVO111 = { 	
						    id: 1,
                            cfbh: this.cfVO.cfbh,
                            jzkh: this.cfVO.jzkh,
                            ygbh: this.cfVO.ygbh,
                            ypbh: this.VO1.ypbh,
                            
                            ypsl: 1,
							ypmc: this.VO1.ypmc,
							ypgn: this.VO1.ypgn,
							ypjg: this.VO1.ypjg,

							ypkc: this.VO1.ypkc,
							scdw: this.VO1.scdw,
							scrq: this.VO1.scrq,
							gqrq: this.VO1.gqrq,

                        }
	cfApi.insert(cfVO111).then(res => {
								console.log(res);
								}).catch(err => {
										console.log(err)
								});

        },

//返回编辑页功能		
		tolist() {
			 this.$router.push({
          path: `/cfb`,
        })
		},
//获取列表数据
cfgetUser(){
    this.cfbh=this.cfVO.cfbh;
    let para={
    cfbh: this.cfVO.cfbh,
    pageNum:this.pageNum,
    pageSize:this.pageSize,
};

this.loading=true;
     let cfbh=this.cfVO.cfbh;  
 cfApi.selectBycfbh(cfbh).then(res=>{
                this.jzkh=res.data.jzkh
                            console.log(res);
                        });
cfApi.selectBymoney(cfbh).then(res=>{
                this.money=res.data
                            console.log(res);
                        });
cfApi. selectById(para).then(res=>{
    this.cftableData=res.data.list;
   
})
},
	insertshouru() {
			 let hjVO={
    id:'1',
   jzkh:this.jzkh,
   jfje:this.money,
   jflx:'3',
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
          path: `/hjb`,
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

