 <!-- 编辑页面 -->
<template>
    <div id="users"  >
        <el-row>
             <el-col :span="1" class="grid">
                <el-button size='mini' plain icon="el-icon-circle-plus"  @click="addusers">新增</el-button>
            </el-col>
        </el-row>
         <!--表格数据及操作-->
        <el-table :data="tableData" border style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark"  >        
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>

            <el-table-column prop="sex"  :formatter="formatRole" label="性别" width="180" >
            </el-table-column>

            <el-table-column prop="age" label="年龄" width="180" >
            </el-table-column>

            <el-table-column prop="phone" label="联系方式" width="180" >
            </el-table-column>
            
            <el-table-column label="编辑" width="100">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini"   @click="update(scope.$index, scope.row)">编辑</el-button>
                    
                </template>
            </el-table-column>
            <el-table-column label="删除" width="100">
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
        
         <el-dialog  :visible.sync="dialogVisible" width="32%" :close-on-click-modal="false" @close="noaddusers">
                <el-row>
                    <el-col :span="24">
                        <el-form ref="usersVO" :model="usersVO" label-width="100px" class="demo-ruleForm" label-position="left" size="small" >
                         
                             <el-form-item label="姓名" prop="'name'">
                                <el-input v-model="usersVO.name"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" prop="'sex'">
                                <el-select v-model="usersVO.sex" placeholder="请选择性别" style="width:100%;">
                                    <el-option label="男" value="1"></el-option>
                                    <el-option label="女" value="0"></el-option>
                                </el-select>
                          
                            </el-form-item>
                                <el-form-item label="年龄" prop="'age'">
                                <el-input v-model="usersVO.age"></el-input>
                            </el-form-item>
                            <el-form-item label="联系方式" prop="'phone'">
                                <el-input v-model="usersVO.phone"></el-input>
                            </el-form-item>
                            <el-form-item >
                                 <el-button type="primary" icon="el-icon-edit" size="mini"   @click="updateusers">修改用户信息</el-button>
                                 <el-button type="primary" icon="el-icon-edit" size="mini"   @click="noupdate">取消修改</el-button>

                            </el-form-item>
               </el-form>
 </el-col>
  </el-row>
   </el-dialog>
   </div>
       
   </template>
   
<script>
import Api from '@/apis/usersmanagement.js'
import { Script } from 'vm';
    export default {
        data() {
            return {
                //表格数据
                tableData: [
                    {
                    id: '',  
                    name: '',
                    sex: '',  
                    age: '',
                    phone: '', 
                     },
                    
                ],
                  usersVO: { 
                id: '',
                name: '',
                sex: '',
                age: '',
                phone:''
                 },
                  usersVO2: { 
                id: '',
                name: '',
                sex: '',
                age: '',
                phone:''
                     },
                msg : '',
                
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
                return row.sex == '1' ? "男" : "女";
                },
             //新增页面显示
        addusers() {
            this.dialogVisible = true;
            this.usersVO = {
            id: '',
            name:'',
            sex:'',
            age:'',
            phone:'',                     

                        }
        },
         //新增页面不显示
        noaddusers () {
            this.dialogVisible = false;
        this.$refs['usersVO'].clearValidate() 
        },
    
          //新增键功能
insertusers(usersVO) {
let usersVO1 = {
id: this.usersVO.id,
name: this.usersVO.name,
sex: this.usersVO.sex,
age: this.usersVO.age,
phone:this.usersVO.phone

                        }
Api.insert(usersVO1).then(res => {
                                 this.noaddusers ();
                                  this.getUser ();
console.log(res);
}).catch(err => {
                                     this.getUser ();
                                     this.noaddusers ();
console.log(err)
});
        },  
        

    //修改页面不显示
        update(index, row) {
            this.idx = index;
            this.usersVO2=row;
            this.dialogVisible1 = true;
        },
         //修改页面不显示
        noupdate () {
            this.dialogVisible1 = false;
            this.$refs['usersVO2'].clearValidate() 
        },
         //修改键功能
                 
        updateusers(usersVO2) {
                    let usersVO21 = {
                                id: this.usersVO2.id,
                                name: this.usersVO2.name,
                                sex: this.usersVO2.sex,
                                age: this.usersVO2.age,
                                phone:this.usersVO2.phone

                                            }
                    Api.update(usersVO21).then(res => {
                    console.log(res);
                    this.getUser ();
                                                      this.noupdate ();
                    }).catch(err => {
                                                                console.log(err)
                                                                 this.getUser ();
                    });
                    },
                                
                          //删除键功能
                        deleteByid(index,row){
                        this.idx=index;
                        this.msg=row;
                        Api.deleteByid(this.msg.id).then(res=>{
                            this.getUser();
                            console.log(res);
                        }).catch(err => {
                                                                    console.log(err)
                                                                     this.getUser ();
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

