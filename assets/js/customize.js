const USER = DAJOUR;

$(window).on("load", function () {
  if (isEmpty(USER.testimonials)) $("#testimonial").hide();
  if (isEmpty(USER.resume)) $("#resume").hide();
  if (isEmpty(USER.clients)) $("#client").hide();
  if (isEmpty(USER.blogs)) $("#blog").hide();

  $("#name").html(
    `${USER.name.firstName} <span class='stroke-text'>${USER.name.lastName}</span>`
  );

  $("#user-avatar").attr("src", USER.avatar);

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
  $("#typer1").attr("data-words", `Hi There!, I'm ${USER.name.firstName}`);

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

  console.log($("#user-exp-years").text());
  $("#user-exp-years").text(USER.statistic.experience);
  $("#user-working-hours").text(USER.statistic.working);
  $("#user-project-numbers").text(USER.statistic.projects);

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
});
