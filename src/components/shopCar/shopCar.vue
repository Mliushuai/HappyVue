<template>
  <div v-cloak>
    <template v-if="list.length">
      <table>
        <thead>
        <tr>
          <th><input type="checkbox" id="box" @click="checkAll" v-model="checkAllData"></th>
          <th>序号</th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button
              @click="handleReduce(index)"
              :disabled="item.count === 1"
            >-
            </button>
            {{item.count}}
            <button
              @click="handleAdd(index)"
            >+
            </button>
          </td>
          <td>
            <button @click="handleRemove(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>总价:￥{{totalPrice}}</div>
    </template>
    <div v-else>购物车为空</div>
  </div>
</template>


<script>
  export default {
    name: 'shopCar',
    data() {
      return {
        checkAllData: false,
        list: [
          {
            id: 1,
            name: 'iphone',
            price: 6180,
            count: 1
          }, {
            id: 2,
            name: 'ipad pro',
            price: 5880,
            count: 1
          }, {
            id: 3,
            name: 'MacBook Pro',
            price: 14288,
            count: 1
          },
        ],
      }
    },
    computed: {
      totalPrice() {
        var total = 0;
        for (var i = 0; i < this.list.length; i++) {
          var item = this.list[i];
          console.log(`item===>`, item);
          total += item.price * item.count
        }
        console.log(`total===>`, total);
        return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
      },
    },
    methods: {
      handleReduce(index) {
        if (this.list[index].count === 1) return;
        this.list[index].count--;
      },
      handleAdd(index) {
        this.list[index].count++;
      },
      handleRemove(index) {
        this.list.splice(index, 1)
      },
      checkAll() {
        var _this = this;
        if (this.checkAllData) {
        }
      }
    },
  }

</script>
<style lang="scss" scoped="" type="text/css">
  [v-cloak] {
    display: none;
  }

  table {
    border: #e9e9e9 1px solid;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }

  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }

  th {
    background-color: aliceblue;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
</style>
