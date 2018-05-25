var alltowns= [
    
    { city: 'اريحا' , town : 'مدينة اريحا' },
    { city: 'اريحا' , town : 'الجفتلك' },
    { city: 'اريحا' , town : 'الديوك' },
    { city: 'اريحا' , town : 'العوجة' },
    { city: 'اريحا' , town : 'النويعمة' },
    { city: 'اريحا' , town : 'عقبة جبر' },
    { city: 'اريحا' , town : 'عين السلطان' },
    
    { city: 'الخليل' , town : 'مدينة الخليل' },
    { city: 'الخليل' , town : 'اذنا' },
    { city: 'الخليل' , town : 'الشيوخ' },
    { city: 'الخليل' , town : 'الظاهرية' },
    { city: 'الخليل' , town : 'العروب' },
    { city: 'الخليل' , town : 'الفوار' },
    { city: 'الخليل' , town : 'بني نعيم' },
    { city: 'الخليل' , town : 'بيت امير' },
    { city: 'الخليل' , town : 'بيت اولا' },
    { city: 'الخليل' , town : 'بيت عوا' },
    { city: 'الخليل' , town : 'بيت كاحل' },
    { city: 'الخليل' , town : 'حلحول' },
    { city: 'الخليل' , town : 'خاراس' },
    { city: 'الخليل' , town : 'دورا' },
    { city: 'الخليل' , town : 'سعير' },
    { city: 'الخليل' , town : 'صوريف' },
    { city: 'الخليل' , town : 'ترقوميا' },
    { city: 'الخليل' , town : 'تفوح' },
    { city: 'الخليل' , town : 'نوبا' },
    { city: 'الخليل' , town : 'يطا' },
    
    { city: 'القدس' , town : 'مدينة القدس' },
    { city: 'القدس' , town : 'ابو ديس' },
    { city: 'القدس' , town : 'الرام' },
    { city: 'القدس' , town : 'الزعيم' },
    { city: 'القدس' , town : 'السواحرة الشرقية' },
    { city: 'القدس' , town : 'الشيخ جراح' },
    { city: 'القدس' , town : 'الشيخ سعد' },
    { city: 'القدس' , town : 'الطور' },
    { city: 'القدس' , town : 'العيزرية' },
    { city: 'القدس' , town : 'العيساوية' },
    { city: 'القدس' , town : 'بدو' },
    { city: 'القدس' , town : 'بيت حنينا' },
    { city: 'القدس' , town : 'بيت صفافا' },
    { city: 'القدس' , town : 'حزما' },
    { city: 'القدس' , town : 'شعفاط' },
    { city: 'القدس' , town : 'عطروت' },
    { city: 'القدس' , town : 'عناتا' },
    { city: 'القدس' , town : 'قلنديا' },
    
    { city: 'بيت لحم' , town : 'مدينة بيت لحم' },
    { city: 'بيت لحم' , town : 'ارطاس' },
    { city: 'بيت لحم' , town : 'الخضر' },
    { city: 'بيت لحم' , town : 'الخليفات' },
    { city: 'بيت لحم' , town : 'الدوحة' },
    { city: 'بيت لحم' , town : 'الشواورة' },
    { city: 'بيت لحم' , town : 'التعامرة' },
    { city: 'بيت لحم' , town : 'العببيدية' },
    { city: 'بيت لحم' , town : 'الولجة' },
    { city: 'بيت لحم' , town : 'بتير' },
    { city: 'بيت لحم' , town : 'بيت جالا' },
    { city: 'بيت لحم' , town : 'بيت احور' },
    { city: 'بيت لحم' , town : 'بيت تعمر' },
    { city: 'بيت لحم' , town : 'بيت فجار' },
    { city: 'بيت لحم' , town : 'جناتا' },
    { city: 'بيت لحم' , town : 'حوسان' },
    { city: 'بيت لحم' , town : 'خلايل اللوز' },
    { city: 'بيت لحم' , town : 'دار صلاح' },
    { city: 'بيت لحم' , town : 'زعترة' },
    { city: 'بيت لحم' , town : 'تقوع' },
    { city: 'بيت لحم' , town : 'ظهرة الندى' },
    { city: 'بيت لحم' , town : 'نحالين' },
    
]

$("#city").change(function(){
	var city = $(this).val();
	var options =  '<option value=""><strong>القرية</strong></option>';
	$(alltowns).each(function(index, value){
       
		if(value.city == city){
			options += '<option value="'+value.city+'">'+value.town+'</option>';
		}
	});
	
	$('#town').html(options);
});