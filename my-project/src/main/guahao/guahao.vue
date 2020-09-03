
<!-- 挂号页面 -->
<template >
	<el-form ref="ghbVO" :model="ghbVO" label-width="80px"  style="margin:20px;width:90%;">
       <el-row :gutter="10">
  

  <el-col :span="12">
 <el-form-item :label="label1" prop="ghbh">
			<el-input v-model="ghbVO.ghbh"></el-input>
		</el-form-item>
		
        <el-form-item :label="label2" prop="jzkh">
			<el-input v-model="ghbVO.jzkh"></el-input>
		</el-form-item>
        <el-form-item :label="label3" prop="ksbh">
						<el-select v-model="ghbVO.ksbh" placeholder="请选择挂号科室"  style="width:100%;">
				<el-option label="骨科" value="1"></el-option>
				<el-option label="儿科" value="2"></el-option>
				<el-option label="牙科" value="3"></el-option>
				<el-option label="神经外科" value="4"></el-option>
			</el-select>
		</el-form-item>
        
    </el-col>
     <el-col :span="12">
 <el-form-item :label="label4" prop="ghlx">
			<el-select v-model="ghbVO.ghlx" placeholder="请选择挂号类型"  style="width:100%;">
				<el-option label="普通挂号" value="0"></el-option>
				<el-option label="急诊挂号" value="1"></el-option>
				<el-option label="专家挂号" value="2"></el-option>
			</el-select>
		</el-form-item>
        <el-form-item :label="label5" prop="ghrq">
        <el-date-picker
         style="width:100%;"
          v-model="ghbVO.ghrq"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
			</el-form-item>
        <el-form-item :label="label7" prop="bzxx">
			<el-input v-model="ghbVO.bzxx"></el-input>
		</el-form-item>
         </el-col>
</el-row>

		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">缴费挂号</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消挂号</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import hjApi from '@/apis/huajia3.js'
import Api from '@/apis/guahao1.js'
export default {
  props: ['productData'],
  name: 'insertusers',
  components: {},
  data () {
    return {
		 label1:"挂号编号",
     label2:"就诊卡号",
     label3:"挂号科室",
     label4:"挂号类型",
     label5:"挂号日期",
     label6:"挂号费用",
     label7:"备注信息",
     label8:"操作人员",
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
    }
  },

  methods: {
		 //新增键功能
		insert(ghbVO) {
			 let ghbVO1 = { 	
							ghbh: this.ghbVO.ghbh,
							jzkh: this.ghbVO.jzkh,
							ksbh: this.ghbVO.ksbh,
							ghlx: this.ghbVO.ghlx,
							ghrq:this.ghbVO.ghrq,
							ghfy: 30,
              bzxx: this.ghbVO.bzxx,
              czry:localStorage.getItem("ygbh"),

                        }
							Api.insert(ghbVO1).then(res => {

								console.log(res);

								}).catch(err => {
										console.log(err)
								});

									let hjVO={
								id:'1',
							jzkh:this.ghbVO.jzkh,
							jfje:30,
							jflx:'1',
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
          path: `/ghb`,
        })
		},



	},
	

}


</script>
