<template>
  <header class="header">
    <!-- <label for="username">用户名</label>
    <input type="text" name="username" id="username" v-model="username" />
    <label for="possword">密码</label>
    <input type="text" name="possword" id="possword" v-model="password" />
    <button @click="add">登录</button> -->
    <div class="outbox">
      <van-image
        width="50"
        height="50"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAAGgCAMAAADb6ENrAAACqVBMVEUAAAD//wD/fwD/qgD/fwD/mQD/cQD/gAD/dAD/agD/dgD/bQD/dwD/cAD/aQD/awD/cwD/bQD/cAD/bAD/aAD/bAD/agD/aAD/awD/aQD/aQD/ZwD/agD/aAD/agD/aAD/aQD/ZwD/aQD/aAD/aAD/ZwD/aAD/aQD/aAD/ZwD/aAD/aQD/aAD/ZwD/aAD/aAD/aQD/aAD/aAD/aAD/ZwD/aAD/ZwD/aAD/aAD/aAD/ZwD/aAD/aAD/aAD/aAD/ZwD/aAD/aAD/ZwD/ZwD/ZwD/ZwD/aAD/aAD/ZwD/aAD/ZwD/aAD/aAD/ZwD/ZwD/ZwD/aAD/ZwD/aAD/aAD/ZwD/aAD/aAD/ZwD/aAD/aAD/aAD/ZwD/ZwD/aAD/ZwD/aAD/ZwD/ZwD/ZwD/aAD/ZwD/ZwH/aAL/aAP/aQT/aQX/agb/awf/bAn/bAr/bQv/bgz/bg3/bw7/bw//cRL/chT/cxX/dBf/dRn/dhr/dxv/dxz/eR//eiD/eiH/eyL/fij/gzD/hDH/hDL/hTP/hTT/hjX/hzb/hzf/iDj/iTr/ijz/iz3/jD//jUH/jkL/j0T/kEX/kEb/kUf/kkn/k0r/lk//llD/l1L/mFP/nFr/n17/n1//oGD/omP/pGf/pGj/pWn/pmr/pmv/p23/qG7/qXD/qnL/rHT/rnj/r3n/tYT/toX/tob/uIj/uIn/uYv/uoz/vJD/vpL/vpP/wJb/wZj/w5z/xqD/x6L/yaX/zKr/z6//z7D/0bP/0rX/1Lf/2L//2cD/2sH/3cf/3sj/3sn/38r/4Mv/4Mz/4s//4tD/49H/5dT/5dX/5tb/59j/6Nr/6dv/6t3/7eH/8Ob/8ur/9O3/9O7/9e//9vD/9/P/+fb/+vj/+/n//Pv//fz//f3//v7///+V1L4cAAAAZHRSTlMAAQIDBAUJCgsMDQ4PEBETFBUZGhs0NTY3OERFRkdITE5PUFtdXmxtbm9xgYKDhIWGh4mMjY6PkJGio6Slpqmqq6ytr7K0tr2+wMjJysvN19re3+Dh5OXm5+zu9PX29/j5+vz9zycJhwAABy5JREFUeNrt2+efFPUBx/E5EA5QCaIEFCEqYtQAByh2ELAEpAZETjlDW7GiGOwmqJDY0dgVuwmaYkmipqiJBXtJFHsDnb/EPPQJOzO7s/P7eb4/z2d37/t+bZmdvSSRJEmSJEmSJEmSvl3fQSNGTfrpzDkLTlSBFsyZOW3SqBGD+rYUp/duY49bVlMTLZsxbmjv1uj0GHroIgOXUddhu/conecHP1lg2fI6YfSAUnkGHuDJU3KLDhxY3lvP6J8btPwWd5T0ZvSjnxmzNc3bowSeHY40ZOuasmOzPj/09Gntk2hwcz77LLFha1u6bxM8bQcYsPVNaGvUZ7tDrVdFh/dq0Odo21XTMQ0JtXn+VPccauRVzvtPhR1U3OfHVquy/Qqf//h8Xe2n7YLnQzs4P636jLXYdwq+36m8qYW+H7VX9e1Z4PqCF7gAzW/PDTTaWiEam/v6qetzQVq8s1PUuJuQ8/chfn8QqK58vyQZZalQjcn1+ze/rwrWwp45gIbaKVzDcgC5yhCwI3KcpPqIEPJjQvbJ6m5Wivs1bqyRQjY+E+g4I4VsZub/Z/n/n6At65cBNMhGYcu6sjrCRGHb2/c8cdeRATTJRGGbnAE0zURhm54BNMtEYZudATTHRGGbmwHkWkPgOjOATjRR2E4CBEiAAAmQAAESIECAAAkQIAESIEACBEiABAiQAAECBEiAAAmQAAESIEACJECABAgQIEACBEiABAiQAAECBEiAAAkQIECABAiQAAkQIAECBAiQAAESIECAAAkQIAESIEACBAgQIAECJECAAAESIED6fgH9+v6HAvTgPXf+9srVTTzsmx6sc+u3nNJ9gH6XBuzDl568/RcNPey/1b/hv3cfoM1p4LZueuSCwo/6tC/q3+hXK7sN0Cdp+LY8d0vBR31u1k1eCKjcXrsVUNRAafryWkBRA6Vbn1gJKGagNN28DlDUQOkX9wKKGihNnz4VUNRA6TOnA4oaKP3PWYCiBkqfWwEoaqD0SUBxA6UbAcUNtOVKQFEDpZtXAYoaKP0HoLiB0msBxQ30xqmAogZK7wMUN9D7pwGKGijdAChuoLdPARQ1UN0PcoBiuDQEKG6gj84AFDVQejOguIEeBxQ30KuA4gbaugpQHqBPH1p3eRndePcfn3qvkNBVgPIAbSjz7tY+9kEZXyYA+laXlnuHq/66NS/QnwHlAbqo7Lu84r85gf4FKAhQ7fw38wH9G1AYoNrq13MBvQAoEFDt4o/zAL0OKBRQ7a48QG8BCgZUexZQ3EBrAcUNVHsRUNxAdwCKG+icLYCiBqptAhQ30GOA4ga6D1DcQHcAihvoOkBxA/0GECBAgAABAtSNgVasuWzb/RJQaKAL/1f30FfOBhQW6NGMYx8AFBbonxnH/gkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhQIaC/ZBz7e0BhgdZ8UPfQd1cDarZ3sv7UL8+sd/jZ11y/7a6qe+glmUDPb/PYFZ8186C/U0C3fV7/T/3q4Vbdc+2JDJ+Pr972sRu/rnfk13+odRug2nnX31Cn9ZfUWtea9fXu+tpz6x17aZ1j1/+q1o2ABAiQAAECBEiAAAmQAAESIECAAAkQIAESIEACBEiABAiQAAECBEiAAAmQAAESIEACJECABAgQIEACBEiABAiQAAECBEiAAAkQIECABAiQAAkQIAECBAiQAAESIECAAAkQIAESIEACBAgQIAECJECAAAESIEACpKJAC0wUts4MoDkmCtvcDKCZJgrb7AygaSYK2/QMoEkmCtvkDKBRJgpbRwbQCBOFbWQG0CAThW1IBlDfZTYK2fLtM4CSGUYK2awsn2SckUI2PhNoqJFCNiwTqL3LSuE6uU8mUHKYmcI1Mdsn2d1M4RqeA6jHCXYKVWfPHEDJaEOFqiOPTzJgkaXC1LVTLqDkQFOF6eB8PsnAxbYK0ZJdcgIlHcYK0bi8PknvedaqvuPbcwMle5ir+vZKCjTFXlV3VBGfZEcvchU3v38hoGTwUptV2dJdk4Lta7Qq2z8p3ASrVdchxX2StsPtVlUT2xoASnodY7lqOrZX0lC9PIeqef406PP/V7mDrFfB+09b0nj7+bTd6s/X+ydNNcQZa2vPT3dNmqz/VCu28Pud/knz7TnfkK3p+L2SUmof6wpeC1oyrj0pq50n+DljyXUdvEtSZgPGLDRqeXV27JSUXc9hR3galdLJE4f3TFpSn2HjZ/n/oaZaPmv88D5JK+s3eGTH5Omz53aepAJ1zp09fXLHyCHbJ5IkSZIkSZIkdbe+ATnxBFLSavkmAAAAAElFTkSuQmCC"
      />
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field v-model="password" label="密码" placeholder="请输入密码" />
        <van-button
          type="primary"
          size="large"
          @click="add"
          style="height: 30px; margin: 10px auto; width: 200px"
          round
          block
          >登录</van-button
        >
      </van-cell-group>
      <div class="ahh"></div>
    </div>
  </header>
</template>

<script>
//引入用户名密码 组件
import { Image as VanImage } from "vant";
Vue.use(VanImage);
import Vue from "vue";
import { Field } from "vant";
import { Button } from "vant";
// import "vant/lib/button/style";
import { Cell, CellGroup } from "vant";
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);

export default {
  data() {
    return {
      username: "",
      password: "",
      value: "",
    };
  },
  methods: {
    add() {
      console.log(this.username, this.possword);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      this.$router.push("/");
    },
  },
  /* components: {
    component: "van-cell-group",
  }, */
};
</script>

<style scoped>
.van-cell-group {
  padding-bottom: 5px;
}
.van-image {
  display: block;
  margin: 0px auto;
  padding-bottom: 20px;
}
.ahh {
  clear: both;
  height: 0;
  overflow: hidden;
}
header {
  width: 100%;
  background: #f6f6f6;
  height: 100vh;
}
/* #app {
  height: 100vh;
} */
html {
  overflow: hidden;
}

/* .header:after {
  content: "\0020";

  display: block;

  height: 0;

  clear: both;
} */
.outbox {
  /* height: 1000px; */
  /* height: 500px; */
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>