# Этот код нужно добавить в function.php темы:
```php
function inspiry_edit_property_meta_boxes($meta_boxes) {
	foreach ($meta_boxes as $k => $meta_box) {
		if (isset($meta_box['id']) && 'property-meta-box' == $meta_box['id']) {
			$meta_boxes[$k]['fields'][] = array(
				'id'      => 'detail-title',
				'name' 	  => 'Название таблиц',
				'desc' 	  => '(Записывать через запятую)',
				'type' 	  => 'text',
				'std'     => "",
				'columns' => 6,
				'tab'     => 'details',
			);
		}
	}
	return $meta_boxes;
}
```
# Файлы с class-* и js, нужно добавлять к ```/wp-content/plugins/inspiry-real-estate/admin```