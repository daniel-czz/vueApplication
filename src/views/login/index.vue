<template>
    <div class="login-container">
        <van-nav-bar 
            class="app-nav-bar"
            title="Log In" 
            left-arrow
            @click-left="$router.back()"
        />

        <van-form @submit="onLogin"
                    @failed="onFailed"
                    :show-error-message = "false"
                    :show-error="false"
                    :validate-first="true"
        >       
            <van-cell-group inset>
                <van-field
                    v-model="user.mobile"
                    left-icon="phone"
                    placeholder="Mobile"
                    input-align="left"
                    center
                    :rules="formRules.mobile"
                />
                <van-field
                    v-model="user.code"
                    left-icon="lock"
                    placeholder="Verification Code"
                    input-align="left"
                    center
                    :rules="formRules.code"
                >
                    <template #button>
                        <van-button class="send-btn" size="small" round>Send Code</van-button>
                    </template> 
                </van-field>

            </van-cell-group>
            <div class="login-btn-wrap">
                <van-button 
                    class="login-btn" 
                    type="primary" 
                    block
                    native-type="submit"
                >
                    Login
                </van-button>
            </div>
        </van-form>

        

    </div>
</template>

<script>
import { login } from '@/api/user.js'
import { showLoadingToast, closeToast, showSuccessToast, showFailToast } from 'vant';  

export default {
    name: 'LoginIndex', 
    components: {},
    data() {
        return {
            user: {
                mobile: '13911111111',
                code: '246810'
            },
            formRules: {
                mobile: [
                    { required: true, message: 'please enter mobile' }, 
                    { pattern: /^1\d{10}$/, message: 'please enter valid mobile' }
                ], 
                code: [
                    { required: true, message: 'please enter verification code' }, 
                    { pattern: /[1-9]{6}$/, message: 'please enter valid verification code' }
                ]
            }
        }
    },
    methods: {
        async onLogin(){

            console.log('enter login')
            // const data = await login(this.user);
            // console.log('return data', data)

            const toast = showLoadingToast({
                duration: 0,
                forbidClick: true,
                message: '倒计时 3 秒',
            });

            let second = 3;
            const timer = setInterval(() => {
            second--;
            if (second) {
                toast.message = `倒计时 ${second} 秒`;
            } else {
                clearInterval(timer);
                // closeToast();
                showSuccessToast('Login Success') // 新的提示会自动关掉之前的提示，不需要手动关闭 
            }
            }, 1000);
                
            
        },
        onFailed(errorInfo){
            if(errorInfo.errors[0]){
                showFailToast({
                    message: errorInfo.errors[0].message, 
                    position: 'top'
                })
            }
        }
    },
}
</script>

<style scoped lang="less">
    .login-container {
    
        .login-btn-wrap {
            padding: 26px 16px;

            .login-btn {
                background-color: #6db4fb;
                border: none;

                // .van-button__content {
                //     font-size: 100px !important;
                // }
                
            }
        }

        .send-btn {
            width: 76px;
            height: 23px;
            background-color: #ededed;
            
            .van-button__content { // 不起作用 
                font-size: 11px;
                // color: #666;
                color: red !important;
            }
        }
    }
</style>