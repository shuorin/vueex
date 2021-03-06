let app = Vue.createApp({
     //элемент, с которым мы работаем
    data: function() {
        return {
          sitename: 'Магазин TechnoSmart - все для вашего компьютера',
					product:{
            id: 1,
            type: 'Материнская плата',
						title: 'GIGABYTE B460M DS3H',
						description: 'Базирующаяся на чипсете Intel B460 материнская плата GIGABYTE B460M DS3H подходит для создания компьютеров разного назначения. Вы сможете собрать как офисный системный блок, так и универсальную домашнюю систему. Плата совместима с широчайшим образом распространенными процессорами Intel LGA 1200. Максимальный объем памяти – 128 ГБ.Предусмотрен один разъем M.2: это значит, что в качестве системного диска можно будет задействовать скоростной SSD.',
						rating: 4.5,
            availability: 34,
            price: 4350,
            image: 'pic1.jpg'
          },
          user: {
            username: 'redcat',
            firstname: 'Иван',
            lastname: 'Иванов',
            year: '03.02.1990',
            userpic: 'user.png'
          }
          
        }
      }
});
  
  let vm = app.mount("#app");