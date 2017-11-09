#pragma strict

function Start () {

}

function Update () {

}

/*
	Al colisionar (Collider!!!), se pinta al jugador del color de la pintura asignada.
*/
function OnTriggerEnter(col : Collider){
	if (col.gameObject.CompareTag("Player"))	{
		col.gameObject.GetComponent.<MeshRenderer>().material.color = gameObject.GetComponent.<MeshRenderer>().material.color;
	}
}	