# Single Page Application

SPA en dikkat çeken özelliği routing işlemini backend tarafından değilde client tarafında yapıldığı bir web uygulamasıdır. SPA AJAX teknolojisinin gelmesiyle beraber backend tarafındaki yükü client tarafına çekerek kullanıcı deneyimini artırmayı hedeflemiştir. SPA'lar, kullanıcı etkileşimleriyle sayfa içeriğini dinamik olarak günceller. Bu, kullanıcıların yeni bir sayfa talep ettiğinde tam sayfa yenilemesi yapmak yerine, gerekli verilerin yalnızca bir kısmının sunucudan istenip alınması ve mevcut sayfaya eklenmesi anlamına gelir.

## Single Page Application Avantajları

1. **Hız :** SPA ile üretilen web uygulamalarında sayfa sürekli yenilenmez , bu sayede uygulama daha hızlı reaksiyon verir. Çoğu web uygulamasında kaynak dosyalar bir kez gelir ve kullanıcının etkileşimine bağlı olarak kaynak üzerinde ilgili parçalar değişir.

2. **Geliştirme Kolaylığ :**  SPA'lar modüler yapıda oldukları için bakımları kolay geliştirme süreleri daha etkili olabilir.

3. **Caching :**  SPA'lar veriyi önbellekte tutar. Bu yüzden bir kez sunucuya istek atarak gelen veriyi önbelleğe alır internet yavaşlaması ve gitmesi durumunda kullanıcı etkileşimde kalabilir . İnternet bağlantısı geldiği durumda sunucu ile tekrardan senkronize olur.

## Single Page Application Dezavantajları

1. **SEO :** SPA'lerde yönlendirme işlemleri Javascript tarafında yapıldığı için eski dinamik sayfalarda olduğu gibi etkili şekilde yapılamıyor. Ancak modern Frameworkler bu soeunu göz önünde bulundurarak yeni çözümler üretmeye çalışıyor. Server Side Rendering sayesinde SEO sorunu çözümlenebilir.

2. **Memory leaks(bellek sızıntısı) :**  SPA'lerde kullanıcı etkileşimiyle beraber bir çok obje sürekli yüklenir ve gider . Ancak uygulamayı geliştiren developer bu ortamı düzgün ayarlamaması durumunda bellekte şişme yaparak uygulamada yavaşlama ve batarya kullanımının artmasına sebeb verebilir.

3. **Güvenlik :** Temel olarak Client tarafına binen yükden kaynaklı güvenlik zafiyeti açığa çıkıyor. Bununla beraber XSS (Cross-Site Scripting) scriptlerinin uygulamaya entegre etmeninin yolları kolaylaşıyor. Modern tarayıcılar bu konularda ne kadar güvenlik önlemi alsalarda yükün büyük çoğunluğu yine uygulamayı geliştiren developerin üzerine kalıyor.

4. **Tarayıcı Geçmişi :** Bu tür uygulamalarda kullanıcı etkileşimleri sonucu sayfa içeriğinin dinamik olarak değişmesine rağmen, tarayıcının geri ve ileri butonlarının beklenildiği gibi çalışmamasıdır. Geleneksel çok sayfalı uygulamalarda, bir kullanıcı bir sayfadan diğerine geçtiğinde tarayıcı geçmişi otomatik olarak güncellenir ve tarayıcının geri ve ileri butonları sayfa gezintisini doğru şekilde yansıtır. Ancak, SPA'larda tüm etkileşimler tek bir sayfa üzerinde dinamik olarak gerçekleşir ve sayfa yeniden yüklenmez. Bu, tarayıcının geçmiş yönetimini karmaşıklaştırır.