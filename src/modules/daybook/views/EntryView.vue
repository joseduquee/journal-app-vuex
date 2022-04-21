<template>
  <div class="entry-title d-flex justify-content-between p-2">
      
      <div>
          <span class="test-success fs-3 fw-bold">15</span>
          <span class="mx-1 fs-3">Julio</span>
          <span class="mx-2 fs-4 fw-light">2021, jueves</span>
      </div>

      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>
  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <FabButton icon="fa-save"/>

  <img 
    src="https://us.123rf.com/450wm/dtosh/dtosh1908/dtosh190800076/128852911-tel%C3%A9fono-en-una-mano-con-el-s%C3%ADmbolo-del-lenguaje-python-en-la-pantalla-del-m%C3%B3vil-concepto-de-softwar.jpg?ver=6" 
    alt="entry-picture"
    class="img-thumbnail"
    >

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        FabButton: defineAsyncComponent(() => import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>