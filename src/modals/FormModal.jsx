

function FormModal(){

  return(  <div class="modal fade" id="enroll" data-bs-backdrop="static" data-bs-keyboard="false"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="lead">Fill out your information, and we will get back to you!</p>
        <form action="
        ">
          <div class="mb-3">
            <label for="first-name" class="col-form-label">
              First and Last Name:
            </label>
            <input type="text" id="first-name" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phone" aria-describedby="phoneHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

        </form>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis eligendi ullam quam temporibus distinctio,
        itaque ea totam animi, delectus at earum ducimus nam sit facilis voluptate tempore voluptatem fugit.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
);
}

export default FormModal;