document.getElementById('navbar').innerHTML = `
<nav>
    <ul>
      <li><button id="darkmode-button" class="darkmode" placeholder = "DarkMood"></button></li>
      <li>
      <select class = "my_pages">
        <option value="#">My pages</option>
        <option value="#">Link 1</option>
        <option value="#">Link 2</option>
        <option value="#">Link 3</option>
      </select>
      </li>
      <li><a href="../../../src/base.html">Home</a></li>
      <li><a href="../login/src/login.html">login</a></li>
      <li><a href="#">make a Contact</a></li>
    </ul>
  </nav>
`;
