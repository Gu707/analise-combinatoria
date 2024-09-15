<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>site</title>
    <link rel="stylesheet" href="site/css/style.css">
</head>
<body>
    <?php include 'site/includes/header.php'; ?>

    <main>
        <h1>Descobrir senha</h1>

        <label for="quantidades-numeros">Digite a quantidade de números</label>
        <input class="numeros" id="quantidades-numeros" type="number">

        <br><br>

        <label for="quantidades-caracteres">Digite a quantidade de caracteres</label>
        <input class="digitos" id="quantidades-caracteres" type="number">

        <h5 id="valor-descoberto"> </h5>

        <br><br>

        <button id="calcular-btn">Descobrir</button>
    </main>

    <?php include 'site/includes/footer.php'; ?>
    <script src="site/js/script.js"></script>

</body>
</html>
