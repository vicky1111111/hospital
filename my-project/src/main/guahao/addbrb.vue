
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="brbVO" :model="brbVO" label-width="80px"  style="margin:20px;width:90%;">
       <el-row :gutter="10">
    <el-col :span="24">
       <el-form-item :label="label1" prop="jzkh">
			<el-input v-model="brbVO.jzkh"></el-input>
		</el-form-item>
      
     </el-col>
        

  <el-col :span="12">
 
		
        <el-form-item :label="label2" prop="sfzh">
			<el-input v-model="brbVO.sfzh"></el-input>
		</el-form-item>
        <el-form-item :label="label3" prop="hzxm">
			<el-input v-model="brbVO.hzxm" ></el-input>
		</el-form-item>
        <el-form-item :label="label4" prop="hzxb">
			<el-select v-model="brbVO.hzxb" placeholder="请选择性别"  style="width:100%;">
				<el-option label="男" value="1"></el-option>
				<el-option label="女" value="0"></el-option>
			</el-select>
		</el-form-item>
    </el-col>
     <el-col :span="12">
 
        <el-form-item :label="label5" prop="hznl">
			<el-input v-model="brbVO.hznl"></el-input>
		</el-form-item>
        <el-form-item :label="label6" prop="lxdh">
                <el-input v-model="brbVO.lxdh"></el-input>
            </el-form-item>
        <el-form-item :label="label7" prop="jtzz">
			<el-input v-model="brbVO.jtzz"></el-input>
		</el-form-item>
         </el-col>
</el-row>

		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">新建就诊卡</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tobrb">取消新建</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import Api from '@/apis/brb.js'
export default {
  props: ['productData'],
  name: 'insertusers',
  components: {},
  data () {
    return {
		 label1:"就诊卡号",
     label2:"身份证号",
     label3:"患者姓名",
     label4:"患者性别",
     label5:"患者年龄",
     label6:"联系电话",
     label7:"家庭住址",
      brbVO: { 
        	jzkh: '',
					sfzh: '',
					hzxm: '',
					hzxb: '',
					hznl:'',
					lxdh:'',
					jtzz:'',
       },
    }
  },

  methods: {
		 //新增键功能
		insert(brbVO) {
			 let brbVO1 = { 	
							jzkh: this.brbVO.jzkh,
							sfzh: this.brbVO.sfzh,
							hzxm: this.brbVO.hzxm,
							hzxb: this.brbVO.hzxb,
							hznl:this.brbVO.hznl,
							lxdh: this.brbVO.lxdh,
							jtzz: this.brbVO.jtzz,

                        }
							Api.insert(brbVO1).then(res => {

								console.log(res);

								this.tobrb();
								}).catch(err => {
										console.log(err)
								});
		},
				 //返回编辑页功能		
		tobrb() {
			 this.$router.push({
          path: `/brb`,
        })
		},



	},
	

}


</script>
