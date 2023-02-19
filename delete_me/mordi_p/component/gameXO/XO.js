const tictactoe = document.createElement("div");
tictactoe.innerHTML = `
<div class="order">
<br><br>
<p class="order"> player 1 <span id="nameX"> </span> = <span id="player_X">0</span> win game!</p>
<p class="order"> player 2 <span id="nameO"> </span> = <span id="player_O">0</span> win game!</p>
<br><br>
<h1>X or O game !</h1>
<div class="table_div">
    <table>
        <tr>
            <td><button class="btnn" id="btn1"></button></td>
            <td><button class="btnn" id="btn2"></button></td>
            <td><button class="btnn" id="btn3"></button></td>
        </tr>
        <tr>
            <td><button class="btnn" id="btn4"></button></td>
            <td><button class="btnn" id="btn5"></button></td>
            <td><button class="btnn" id="btn6"></button></td>
        </tr>
        <tr>
            <td><button class="btnn" id="btn7"></button></td>
            <td><button class="btnn" id="btn8"></button></td>
            <td><button class="btnn" id="btn9"></button></td>
        </tr>
    </table>
</div>
<div class="side_manu">
    <button class="btndown" id="reset">Reset</button>
    <button class="btndown" id="pname">play with name</button>
    <button class="btndown" id="resetall">Reset scor & name</button>
</div>
</div>
`

export {tictactoe};

