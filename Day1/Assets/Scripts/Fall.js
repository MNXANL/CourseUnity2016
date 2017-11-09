#pragma strict

import UnityEngine.SceneManagement;



function Dead() {
	SceneManager.LoadScene(SceneManager.GetActiveScene().name);
//	SceneManager.LoadScene("Nombre_escena_a_ejecutar");
}

function Start () { //Ejecutado al principio, como el main() de un programa cualquiera.
}

function Update () { //Ejecutado cada fotograma
	if (transform.position.y < -10 ) {
		Dead();
	}
}