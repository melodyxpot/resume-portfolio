const USER = DAJOUR;

$(window).on("load", function () {
  if (isEmpty(USER.portfolio)) $("#portfolio").hide();
  if (isEmpty(USER.portfolio.summary)) $("#user-portfolio-summary").hide();
  if (isEmpty(USER.services)) $("#services").hide();
  if (isEmpty(USER.testimonials)) $("#testimonial").hide();
  if (isEmpty(USER.resume)) $("#resume").hide();
  if (isEmpty(USER.clients)) $("#client").hide();
  if (isEmpty(USER.blogs)) $("#blog").hide();

  $("head link[rel='shortcut icon']").attr("href", USER.avatar);
  $("title").text(
    `${USER.name.firstName} ${USER.name.lastName} - ${USER.role}`
  );

  $("#name").html(
    `${USER.name.firstName} <span class='stroke-text'>${USER.name.lastName}</span>`
  );

  $("#user-avatar").attr("src", USER.avatar);
  // $("#user-name-typer").html(`<span
  //     class="typer text-white"
  //     id="typer1"
  //     data-words="Hi There!, I'm ${USER.name.firstName}"
  //     data-delay="50"
  //     data-deleteDelay="1500"
  //   ></span
  //   ><span class="cursor" data-owner="typer1"></span>`);

  $("#user-role").html(USER.role);

  $("#social-links").html(
    USER.socials
      .map(
        item =>
          `<li>
        <a class="link-decoration" href="${item.link}">${item.title}</a>
      </li>`
      )
      .join("")
  );

  $("#contact-info-list").html(`
    <li>Phone: ${USER.contact.phone}</li>
    <li>Email: ${USER.contact.email}</li>
    <li>Address: ${USER.contact.address}</li>
  `);

  $("#phone-info").html(USER.contact.phone);
  $("#email-info").html(USER.contact.email);

  $("#social-link-icons").html(
    USER.socials
      .map(
        item => `<li>
          <a
            class="button-circle button-circle-sm button-circle-white"
            href="${item.link}"
            ><i class="bi bi-${item.id}"></i></a>
        </li>`
      )
      .join("")
  );

  $("#user-skills").html(
    USER.skills
      .map(
        skill => `<li>
        <i class="fa-brands ${skill.icon} pe-2"></i> ${skill.name}
        <div class="d-inline-block font-family-mono font-small">
          (<span class="counter">${skill.percent}</span>%)
        </div>
      </li>`
      )
      .join("")
  );

  $("#user-summary").html(USER.summary);

  $("#user-exp-years").html(
    `<span class="counter">${USER.statistic.experience}</span>`
  );
  $("#user-working-hours").html(
    `<span class="counter">${USER.statistic.working}</span>`
  );
  $("#user-project-numbers").html(
    `<span class="counter">${USER.statistic.projects}</span>`
  );

  $("#user-portfolio-categories").html(
    `<li data-filter="all">Show All</li>${USER.portfolio.categories
      .map(
        cat =>
          '<li data-filter=".category-' +
          cat.toLocaleLowerCase() +
          '">' +
          cat +
          "</li>"
      )
      .join("")}`
  );

  $("#user-portfolio-summary").text(USER.portfolio.summary);

  $("#user-portfolio-projects").html(
    USER.portfolio.projects
      .map(
        project => `<div class="col-12 col-xl-6 portfolio-item ${project.category
          .map(cat => "category-" + cat.toLowerCase())
          .join(" ")}">
        <div class="portfolio-box">
          <!-- Image -->
          <img
            src="${project.image}"
            alt="${project.id}"
            data-rjs="2"
          />
          <!-- Category -->
          <span class="portfolio-category">${project.category}</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="${project.link}">${project.title}</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>`
      )
      .join("")
  );

  $("#user-educations").html(
    USER.resume.educations
      .map(
        item => `<div class="resume-box">
        <span class="resume-date">${item.date}</span>
        <h5 class="fw-medium">${item.title}</h5>
        <span>@ ${item.school}</span>
      </div>`
      )
      .join("")
  );

  $("#user-employments").html(
    USER.resume.employments
      .map(
        item => `<div class="resume-box">
        <span class="resume-date">${item.date}</span>
        <h5 class="fw-medium">${item.title}</h5>
        <span>@ ${item.company}</span>  
      </div>`
      )
      .join("")
  );

  $("#user-clients").html(
    USER.clients
      .map(
        item => `<div class="swiper-slide client-box">
        <a href="${item.link}">
          <img
            src="${item.logo}"
            alt="${item.id}"
            data-rjs="2"
            height="100"
          />
        </a>
      </div>`
      )
      .join("")
  );

  $("#user-blogs").html(
    USER.blogs.map(
      item => `<div class="blog-post-box">
      <div class="blog-post-img">
        <a href="${item.link}">
          <img src="${item.image}" alt="${item.id}" />
        </a>
        <div class="blog-post-category"><a href="${item.link}">${item.category}
        </a></div>    
      </div>
      <div class="blog-post-caption">
        <p class="mb-2">Posted on ${item.date}</p>
        <h2>
          <a class="link-decoration" href="#">${item.title}</a>
        </h2>
        <a
          class="button button-sm button-outline-dark mt-2"
          href="${item.link}"
          >Read more</a
        >
      </div>
    </div>`
    )
  );

  $("#user-testimonials").html(
    USER.testimonials.map(
      client => `<div class="swiper-slide">
        <div class="testimonial-box">
          <div class="d-block text-yellow mb-3">
          ${Array.from(
            { length: client.review },
            () => '<i class="bi bi-star-fill"></i>'
          ).join("")}
          </div>
          <p>${client.content}</p>
        </div>
        <div class="d-flex align-items-center mt-3">
          <div class="d-inline-block me-3">
            <img
              class="img-mask-avatar-sm"
              src="${client.avatar}"
              alt="${client.id}"
              data-rjs="2"
            />
          </div>
          <div class="d-inline-block">
            <h5 class="fw-medium m-0 line-height-140">
              ${client.name}
            </h5>
            <span class="font-small fw-normal"
              >${client.role}</span
            >
          </div>
        </div>
      </div>`
    )
  );

  Calendly.initBadgeWidget({
    url: `https://calendly.com/${USER.contact.calendly}/30min`,
    text: "Meet Me with Calendly",
    color: "#0069ff",
    textColor: "#ffffff"
  });
});
