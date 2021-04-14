<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Indicadores financieros
    
    p.mb-5 Cuando se desea determinar si el proyecto es conveniente, o no, de poner en funcionamiento, se hace necesario plantear y analizar algunos indicadores financieros, para tomar una decisión efectiva que sea objetiva. Con estas herramientas, podemos visualizar, si la idea de crear empresa o negocio, es viable o no.

    .titulo-segundo
      #t_3_1.h4 3.1 Punto de equilibrio

    p.mb-5 Nos permite determinar, el nivel de un negocio en el cual los ingresos igualan a los egresos y por lo tanto no arroja ni ganancia ni pérdida. Se realiza para determinar las líneas más bajas de producción o ventas, con los cuales puede funcionar un proyecto sin poner en peligro la viabilidad financiera. Entre más bajo sea el punto de equilibrio, son mayores las probabilidades de que el proyecto obtenga utilidades y menor el riesgo de que incurra en pérdidas.

    .row.justify-content-center.align-items-center.mb-5 
      .col-auto.mb-5.mb-xl-0
        .figure
          img(src='@/assets/tema_3/img_3_1_01.svg', alt='Punto de equilibrio', style="width:450px;") 
      .col-12.col-xl     
        p Para calcularlo es necesario descomponer los costos en fijos y variables. Los costos fijos permanecen constantes, independientemente del volumen de producción, mientras que los costos variables guardan relación directa con el volumen de producción. Es recomendable trabajar con datos anuales al momento de calcular el punto de equilibrio.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.mb-3
        p(style="font-size:18pt").mb-4.text-center La fórmula del Punto de Equilibrio, se puede establecer de la siguiente forma:
      .col-auto
        .figure
          img(src='@/assets/tema_3/info_3_1_01.svg', alt='Formula punto de equilibrio') 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.mb-5
        p(style="font-size:18pt").mb-4.text-center En lo que respecta a la gráfica, el punto de equilibrio se puede representar de la siguiente forma:
      .col-auto
        .figure
          img(src='@/assets/tema_3/info_3_1_02.svg', alt='Punto de equilibrio', style="width:650px") 

    .hr--blank

    .titulo-segundo
      #t_3_2.h4 3.2 Tasa Interna de Oportunidad (TIO)

    p.mb-4 El uso de dinero en el tiempo no puede ser gratuito, se debe reconocer una cantidad que sea proporcional a la posible pérdida que se asume, o el pago de un canon por la utilización del dinero, a este valor se le llama interés. Para mayor comprensión se tomará un ejemplo del libro Matemáticas financieras aplicadas, de Jhonny de Jesús Meza: “Si se presta hoy una cantidad de dinero (P) y después de un tiempo determinado se recibe una cantidad mayor (F), la variación del valor del dinero de P a F, se llama valor de dinero en el tiempo, y la diferencia entre F y P es el interés. La operación se representa mediante la siguiente expresión:

    .row.mb-4
      .col-auto
        .tarjeta.tarjeta--custom.px-5
          p #[strong I = F - P]

    p.mb-4 La tasa de interés se expresa como la relación entre lo que se recibe de intereses (I) y la cantidad prestada o invertida (P), esta tasa está expresada en forma porcentual, para un tiempo (n) determinado”.

    .row.mb-4
      .col-auto
        .figure
          img(src='@/assets/tema_3/info_3_2_01.svg', alt='Punto de equilibrio', style="width:200px")

    p.mb-4 La tasa de oportunidad es la tasa de interés pertinente al costo de oportunidad. También se le puede considerar como la rentabilidad mínima requerida del proyecto de inversión, de acuerdo con el riesgo asumido, que, al ser comparada con el retorno esperado del proyecto, debe cubrir el capital inicial invertido, los costos de la operación, los intereses por pago de endeudamiento con terceros y cumplir con las expectativas de utilidad de los accionistas.

    .tarjeta.tarjeta--gris
      p #[strong Ejemplo TIO:]
        br
        br
        | Suponga que la señorita Laura Galindo acostumbra a realizar inversiones en CDT, en los cuales le pagan en promedio el 32% efectivo anual de intereses. (La Tasa de Interés de Oportunidad para esta persona equivaldría a ese mismo 32% efectivo anual en términos corrientes).
        br
        br
        | En términos constantes se asumiría la tasa real del inversionista, donde a la tasa de oportunidad se le descuenta la tasa de inflación.
        br
        br
        | Si la tasa de oportunidad es del 2,5% mensual y la tasa de inflación es del 1,5% mensual. #[strong ¿Cuál es la tasa real de oportunidad del inversionista?]
        br       
        hr
        | #[strong TR] = TIO - Inflación / 1 + Inflación
        br
        br
        | #[strong TR] = (0,025 + 0,015) / (1 + 0,015)
        br
        br
        | #[strong TR = 0,99%]

    .hr--blank

    .titulo-segundo
      #t_3_3.h4 3.3 Valor Actual Neto (VAN) o Valor Presente Neto (VPN)

    p.mb-5 El uso de dinero en el tiempo no puede ser gratuito, se debe reconocer una cantidad que sea proporcional a la posible pérdida que se asume, o el pago de un canon por la utilización del dinero, a este valor se le llama interés. Para mayor comprensión se tomará un ejemplo del libro Matemáticas financieras aplicadas, de Jhonny de Jesús Meza: “Si se presta hoy una cantidad de dinero (P) y después de un tiempo determinado se recibe una cantidad mayor (F), la variación del valor del dinero de P a F, se llama valor de dinero en el tiempo, y la diferencia entre F y P es el interés. La operación se representa mediante la siguiente expresión:

    .row.justify-content-center.align-items-center.mb-5  
      .col-12.col-lg-5.me-0.me-lg-5.mb-4.mb-lg-0
        .bloque-texto-c.p-4
          .h4.mt-3 Es el valor monetario que resulta de restar la suma de los flujos descontados a la inversión inicial
          span - G. Baca Urbina
      .col-12.col-lg-6
        p Entonces, el Valor Actual Neto (VAN) de un proyecto, se puede definir como el valor obtenido actualizado separadamente para cada año; extrayendo la diferencia entre todas las entradas y salidas de efectivo que suceden durante la vida de un proyecto a una tasa de interés fija predeterminada. También incluye las inversiones las cuales deben ser rescatadas del flujo neto de ingresos y egresos.
          br
          br
          | Debe tomarse en cuenta que la tasa de actualización debe ser igual a la tasa de interés pagada por el prestatario y refleja el costo de oportunidad del capital.

    p.mb-5 Para determinar el VAN se utiliza el Flujos de Fondos de la empresa. La fórmula que se emplea para el cálculo del VAN es la siguiente:

    .row.mb-4
      .col-auto.mb-4.mb-lg-0
        .figure
          img(src='@/assets/tema_3/info_3_3_01.svg', alt='Punto de equilibrio', style="width:350px")
      .col-auto
        .figure
          img(src='@/assets/tema_3/info_3_3_02.svg', alt='Punto de equilibrio', style="width:350px")

    p.mb-5 De dónde:
      br
      br 
      | #[strong ET =] Egresos totales
      br
      | #[strong IT =] Ingresos totales

    hr.my-5
    p.mb-4 Algunas situaciones que se pueden presentar en el análisis del VAN:

    ul.custom-marker.mb-5
      li.mb-3 #[strong Si resulta que el VAN es positivo (VAN>0)], la rentabilidad de la inversión es mayor que la tasa actualizada o de rechazo. En consecuencia, el proyecto se acepta.
      li.mb-3 #[strong Si el VAN es cero (VAN=0)], entonces la rentabilidad es igual a la tasa de rechazo, por lo que el proyecto puede considerarse aceptable.
      li.mb-3 #[strong Si el VAN es negativo (VAN<0)], la rentabilidad se encuentra por debajo de la tasa de rechazo y, en consecuencia, el proyecto debe descartarse.  

    .hr--blank 
   
    .tabla-a.mb-5 
      table
        thead
          tr
            th(colspan='6') VALOR&nbsp;&nbsp;&nbsp;ACTUAL NETO - VAN
              br
              | (En miles)
        tbody.clm--center
          tr
            td A&Ntilde;O
            td INGRESO
            td EGRESO
            td FLUJO NETO DEL PERIODO
            td FACTOR DE ACTUALIZACIÓN
            td VAN
          tr
            td 0
            td ---
            td ---
            td ---
            td ---
            td(style="color:red;") -12,845.40
          tr
            td 1
            td 5.322,10
            td 3.049,90
            td 2.272,20
            td 0,840
            td 1.909,41
          tr
            td 2
            td 6.386,40
            td 3.424,40
            td 2.962,00
            td 0,706
            td 2.091,66
          tr
            td 3
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,593
            td 2.205,85
          tr
            td 4
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,499
            td 1.853,65
          tr
            td 5
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,419
            td 1.557,69
          tr
            td 6
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,352
            td 1.308,98
          tr
            td 7
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,296
            td 1.099,99
          tr
            td 8
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,249
            td 924,36
          tr
            td 9
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,209
            td 776,77
          tr
            td 10
            td 7.451,00
            td 3.733,80
            td 3.717,20
            td 0,176
            td 652.75
          tr
            td(colspan='6')   
          tr
            td(colspan='4')            
            td(style="background-color:#EFFCFA;") #[strong VAN]
            td(style="background-color:#EFFCFA;") #[strong 1.535,71]

    p Para el caso de la tabla anterior, con una tasa de descuento de aproximadamente 19%, el resultado es un VAN positivo, por lo que se acepta la ejecución del proyecto. En el año cero (0) aparece la inversión inicial, y a partir del año 1 los flujos resultaron ser positivos, entonces la suma de todos los flujos se le resta a la inversión inicial de $12,845.4 por ser desembolso, lo que brinda un valor positivo final.

    .hr--blank

    .titulo-segundo
      #t_3_4.h4 3.4 Tasa Interna de Retorno (TIR)

    p.mb-4 La tasa interna de retorno se encarga de evaluar la rentabilidad de un proyecto de acuerdo a los flujos de caja para compararla con el costo de capital, es decir, al costo de financiación del proyecto. 

    .row.justify-content-center.align-items-center.mb-5       
      .col-12.col-xl.mb-5.mb-xl-0.me-0.me-xl-5
        p(style="font-size:20px").mb-4 El costo de capital abarca dos aspectos importantes: #[strong los recursos propios y los proporcionados por entidades bancarias.]
        p Al hacer el cálculo de la tasa interna de retorno con los respectivos flujos de caja del proyecto, se obtendrá un valor representado en porcentaje. Del mismo modo, al realizar el cálculo del costo de capital con respecto al patrimonio y a los préstamos bancarios, adquirirá otro valor en porcentaje. Para poder aceptar el proyecto como rentable la tasa interna de retorno debe ser mayor al costo de capital. Por otro lado, el proyecto se rechaza si el costo de capital es mayor o igual a la tasa interna de retorno.
      .col-auto.mb-5.mb-xl-0
        .figure
          img(src='@/assets/tema_3/img_3_3_01.svg', alt='Punto de equilibrio', style="width:450px;") 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-8
        p(style="font-size:16pt").mb-4.text-center En lo que respecta a la gráfica, el punto de equilibrio se puede representar de la siguiente forma:

    .tabla-a.mb-5 
      table
        thead
          tr
            th PERIODO
            th INV. INICIAL
            th INGRESOS
            th EGRESOS
            th F.CAJA
        tbody.clm--center
          tr
            td 0
            td -120.000.000
            td
            td
            td -120.000.000
          tr
            td 1
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 2
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 3
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 4
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 5
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 6
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 7
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 8
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 9
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 10
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 11
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 12
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 13
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 14
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 15
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 16
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 17
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 18
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 19
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 20
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 21
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 22
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 23
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000
          tr
            td 24
            td
            td 5.000.000
            td 1.000.000
            td 4.000.000

    P.mb-4 En un archivo de Excel, se ubica la opción fórmulas financieras y se escoge la opción TIR. Para poder obtener el porcentaje requerido se debe arrastrar desde el periodo 0 hasta el periodo 24. Es diferente del VPN, el cual se hace desde el periodo 1 hasta el 24.
      br
      br
      | #[strong Se obtiene la siguiente fórmula en Excel:]
      
    .row.mb-4
      .col-auto
        .tarjeta.tarjeta--custom.px-5
          p #[strong = TIR ( Periodo 0: Periodo 24;0 )]
      
      
    p.mb-4 #[strong El resultado de la TIR es: -2 %]
      br
      br
      | Cálculo costo de capital: el costo de capital se compone de las siguientes fuentes: patrimonio y bancos, de los $120.000.000COP de inversión inicial, $70.000.000 hacen parte de la primera fuente y $50.000.000 forman parte de la segunda fuente.
      br
      br
      | Más adelante se realiza un ponderado que consiste en dividir cada una de las fuentes sobre el valor total. Por ejemplo: 70.000.000 / 120.000.000 dando como resultado un ponderado de 58,33 %.
      br
      br
      | #[strong Al realizar el ponderado de la fuente bancos se obtiene lo siguiente:]

    .row.mb-4
      .col-auto
        .tarjeta.tarjeta--custom.px-5
          p #[strong 50.000.000 / 120.000.000 = 41,67 %]
     
    p.mb-3 Luego se obtiene el valor del costo, para la fuente patrimonio este equivale a la #[strong TMRR, en este caso es 2,1791 %] y para la fuente bancos, el costo equivale a la #[strong tasa de interés, en este caso sería de 1,70 %]
      br
      br
      | La acción final para llegar a la obtención del costo de capital consiste en una multiplicación del valor ponderado y del costo de cada una de las fuentes. De esta manera, queda un costo de capital para la #[strong fuente patrimonio equivalente a 1,2711 % y para la fuente bancos queda un costo equivalente a 0,71 %]. Del mismo modo, se suman los dos porcentajes de las dos fuentes respectivas obteniendo un resultado de 1,9795 %, el cual equivale al costo de capital.
      br
      br
      | Para concluir, se comparan los dos porcentajes: #[strong la TIR y el costo de capital, en este caso serían -2 % - 1,9795%]. Por lo tanto, el proyecto bajo el parámetro TIR no se acepta, debido a que el costo de capital es mayor que la tasa interna de retorno, lo cual genera pérdidas de 3,6926 % durante cada mes que se ejecute el proyecto.
    
    .hr--blank

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8
        p(style="font-size:16pt").mb-4.text-center Este cuadro muestra el resumen para el cálculo del costo de capital.

    .tabla-a.mb-4
      table
        thead
          tr
            th FUENTES
            th VALOR
            th PONDERADO
            th COSTO
            th COSTO DE CAPITAL
        tbody.clm--center
          tr
            td Patrimonio
            td 70.00.000
            td 58.33%
            td 2.1791%
            td 1.2711%
          tr
            td Bancos
            td 50.000.000
            td 41.67%
            td 1.70%
            td 0.71%
          tr
            td Total
            td 120.000.000
            td
            td 1.9795%
            td
          tr
            td(colspan='3')            
            td PER/GAN%
            td -3.6926%

    p Tanto el VPN como la TlR, deben ser positivos para aceptar el proyecto, con el fin de asegurar su viabilidad en el futuro, por eso se debe ser my preciso y consciente en el manejo de cada uno de los datos, para que se obtengan resultados válidos que permitan guiar eficazmente un proyecto.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
