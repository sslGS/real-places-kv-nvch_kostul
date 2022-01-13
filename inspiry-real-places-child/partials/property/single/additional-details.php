<?php
global $inspiry_options;
global $inspiry_single_property;

$post = get_post();
$detail_title = get_post_meta( $post->ID, "detail-title", true );
if(empty($detail_title)) {
    $detail_title = ['Additional Details'];
} else {
    $detail_title = explode(", ", $detail_title);
}
foreach($detail_title as $i => $title) {
	$additional_details = get_post_meta($post->ID, "REAL_HOMES_additional_details_$i", true);
	if ( ! empty ( $additional_details ) && is_array( $additional_details ) ) {
		$additional_details = array_filter( $additional_details ); // remove empty values

		if ( 0 < count( $additional_details ) ) {

			echo '<div class="property-additional-details clearfix">';

			$additional_details_title = $inspiry_options[ 'inspiry_property_details_title' ];
			if( ! empty ( $additional_details_title ) ){
				echo '<h4 class="fancy-title">'.$title.'</h4>';
			}

			echo '<ul class="property-additional-details-list clearfix">';

				foreach ( $additional_details as $key => $value ) {
					echo sprintf( "<li><dl><dt>%s</dt><dd>%s</dd></dl></li>", $key, $value );
				}

			echo '</ul>';

			echo '</div>';
		}

	}
}
