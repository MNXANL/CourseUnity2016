#pragma strict

function Start () {

}

function Update () {

}


/*	Cada vez que se entra a una plataforma el jugador debe ser hijo de la plataforma, 
 *	y se debe desvincular al salir/saltar.
 *****************************************
 */
function OnCollisionEnter(col : Collision) {
	Debug.Log("In platform");
		
	if (col.gameObject.tag == "MovingPlat") {
		transform.parent = col.transform;
	}
}


function OnCollisionExit(col : Collision) {
	Debug.Log("Out of platform");
	if (col.gameObject.tag == "MovingPlat") {
		
		transform.parent = null;
	}
}