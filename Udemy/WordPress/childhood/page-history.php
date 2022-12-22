<?php 
/*
Template Name: Наша історія
*/
?>

<?php 
  get_header();
?>

<div class="aboutus">
  <div class="container">
    <h1 class="title">Наша історія</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('subtitle_1', 2); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('descr_to_subtitle_1', 2); ?>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="aboutus__img" src="<?php the_field('img_to_subtitle_1', 2); ?>" alt="about_comp_1">
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
          <img class="aboutus__img" src="<?php the_field('img_to_subtitle_2', 2); ?>" alt="about_comp_2">
      </div>
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('subtitle_2', 2); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('descr_to_subtitle_2', 2); ?>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('subtitle_3', 2); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('descr_to_subtitle_3', 2); ?>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="aboutus__img" src="<?php the_field('img_to_subtitle_3', 2); ?>" alt="about_comp_3">
      </div>
    </div>
  </div>
</div>

<?php 
  get_footer();
?>