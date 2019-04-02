<template>
  <div class="reg">
    <div class='tabWarp'>
        <h2 class="topp">用户注册</h2>
      <Form class="forms" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="输入注册名称"/>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="输入注册邮箱"/>
        </FormItem>
        <FormItem label="注册密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd" placeholder="输入注册密码"/>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formValidate.passwdCheck" placeholder="要与上面密码一致"/>
        </FormItem>
        <FormItem label="身份" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="读者">读者</Radio>
                <Radio label="作者">作者</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem class="btn">
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: .106667rem">重置</Button>
        </FormItem>
    </Form>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
          const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    if (this.formValidate.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formValidate.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再输一次'));
                } else if (value !== this.formValidate.passwd) {
                    callback(new Error('密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    passwd: '',
                    passwdCheck: '',
                    gender: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '输入不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '不能为空', trigger: 'blur' },
                        { type: 'email', message: '请输入正确邮箱', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    passwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { required: true, validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style lang="less" scoped>
@import '~common/style/index.less';
  .reg{
    width:100%;
    height:100%;
    background:url('../../../common/img/bj.jpg') no-repeat;
    background-size:cover;
    
    .tabWarp{
      width:500px;
      height:450px;
      background:url('~common/img/zck.png') no-repeat center;
      background-size:100%;
      position:fixed;
      top:100px;
      left:400px;
      display: flex;
      justify-content: center;
      align-items: center;
     .topp{
         font-size: 30px;
         color:#fff;
         position: absolute;
         top:40px;
         left:auto;
     }
      .forms{
          width:70%;
          height:30px;
          line-height: 30px;
          position:absolute;
          left:60px;
          top:100px;
        :last-child{
            .zz{
                margin-left:20px;
            } 
        }
      }
      .btn{
          text-align: center;
      }
    }
  }
</style>