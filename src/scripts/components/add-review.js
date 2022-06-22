class FormReviews extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="add-review">
    <form>
        <div class="input-card">
            <label for="nama-reviewer">Nama</label> <br>
            <input type="text" name="nama-reviewer" id="nama-reviewer" required>
        </div>
        <div class="input-card">
            <label for="comment-reviewer">Komentar</label> <br>
            <input type="text" name="comment-reviewer" id="comment-reviewer" required>
        </div>
        <div class="btn-form">
            <button type="submit" class="btn-form">Kirim Komentar</button>
        </div>
    </form>
</div>`;
  }
}

customElements.define('add-review', FormReviews);
