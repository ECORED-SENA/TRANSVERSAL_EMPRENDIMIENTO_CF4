<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción    

    figure.mb-4
      img(src="@/assets/introduccion/intro.svg", alt="Estudios previos para la creación de empresa", style="display:block; margin:0 auto; max-width:700px;")
      
    
    p La creación de una empresa tiene como punto de partida la realización de estudios previos, los cuales basan su aporte tanto en el análisis del mercado como en el informe financiero referenciado; estos, permiten prever la viabilidad en sí de la idea de negocio que se quiere desarrollar.
      br
      br
      |La organización que vive en el presente, pero con la mirada puesta en el futuro, cuenta con la ventaja de poder adecuar su plan de acción, ajustándolo a las variadas tendencias del mercado, con el objetivo de lograr una permanencia en el ejercicio de su actividad comercial; de manera que, el análisis de la viabilidad, es una herramienta financiera bastante útil para proyectar a futuro la empresa que se desea crear, en aras de identificar si se acepta o se rechaza el proyecto en particular. Por tal motivo se hace necesario que el emprendedor que quiere poner en marcha su idea, se forme integralmente desde el ámbito empresarial conociendo los métodos de interés, los presupuestos de costos y los estados e indicadores financieros que se requieren para poner en funcionamiento la empresa en el mercado.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
