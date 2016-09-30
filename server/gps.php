<?php

// Salvando em arquivo, porém é perfeitamente possível salvar em um DB.

$file = "/tmp/gps-position.txt";

if (isset($_GET["lat"]) && preg_match("/^-?\d+\.\d+$/", $_GET["lat"])
    && isset($_GET["lon"]) && preg_match("/^-?\d+\.\d+$/", $_GET["lon"]) ) {
    $fh = fopen($file, "w");
    if (!$fh) {
        header("HTTP/1.0 500 Internal Server Error");
        exit(print_r(error_get_last(), true));
    }
    fwrite($fh, date("Y-m-d H:i:s")."_".$_GET["lat"]."_".$_GET["lon"]."_");
    if (isset($_GET["t"]) && preg_match("/^\d+$/", $_GET["t"])) {
        fwrite($fh, $_GET["t"]);
    }
    fclose($fh);
    echo "OK";
} elseif (isset($_GET["tracker"])) {
    echo "OK";
} else {
    header('HTTP/1.0 400 Bad Request');
    echo 'Copie essa URL para o campo no aplicativo iTracker e clique <a target="_blank" href="http://www.brenohq.com/server/i-am-here.html">aqui</a> para saber suas últimas coordenadas.';
}
