<script>
    function addItem(listId) {
        // الحصول على العنصر من خلال المعرف
        const list = document.getElementById(listId);

        // إنشاء عنصر جديد في القائمة
        const newItem = document.createElement('li');

        // إضافة نص العنصر الجديد
        const itemText = prompt('أدخل اسم الصنف:');
        if (itemText) {
            newItem.textContent = itemText;
            list.appendChild(newItem);
        }
    }
</script>