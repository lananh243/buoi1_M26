<template>
  <div>
    <table>
      <thead class="header">
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>01/01/2000</td>
          <td>Nam</td>
          <td>Hà Nội</td>
          <td>
            <div class="btn">
               <button class="edit">Sửa</button>
                <button class="delete">Xóa</button> 
            </div> 
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Trần Thị B</td>
          <td>02/02/2001</td>
          <td>Nữ</td>
          <td>Đà Nẵng</td>
          <td>
            <div class="btn">
                <button class="edit">Sửa</button>
                <button class="delete">Xóa</button> 
            </div> 
        </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="header">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse; 
    text-align: center;
}
th, td {
    padding: 18px;
}
tr{
    border: 2px solid gainsboro;
}
.header {
    background-color: rgb(233, 244, 255); 
    color: gray;
}
.btn {
    display: flex;
    justify-content: center;
    gap: 15px;
    box-shadow: none;
}
.edit {
    width: 40px;
    height: 30px;
}
.delete {
    width: 40px;
    height: 30px;
    background-color: red;
    color: white;
}
</style>