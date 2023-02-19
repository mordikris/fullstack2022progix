const login_page = document.createElement("div");
login_page.innerHTML = `
<br><br><br><br>
<div class="container"><br>
            <div class="login"><br>
                <h1 id="h_one">Login</h1>
                <form>
                    <input type="text" name="username" placeholder="Username" id="userName"><br><br>
                    <input type="password" name="password" placeholder="Password" id="password">
                </form><br><br>
                <div class="container">
                    <button id="btnLI">Login</button>
                    <br><br><p>Haven't registered yet? <a href="Register.html"> Register now.</a></p>
                </div>
            </div><br>
        </div><br><br><br>
`;
export {login_page} ;