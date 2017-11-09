#pragma strict

public var radius : float = 10.0f;
public var speed : float = 3.0f;

function Start () {
	transform.localScale = Vector3.zero; // Vector3(0,0,0);
}

/*
 La función UPDATE primero va agrandando el objecto una vez contacta con el jugador. 
 Si se pasa del radio asignado, el objeto se destruye
*/
function Update () {
	transform.localScale = Vector3.Lerp(transform.localScale, Vector3(radius, radius, radius), Time.deltaTime * speed);
	if (radius - transform.localScale.x < 0.1f)	{
		Destroy(gameObject);
	}
}

/*
 Matar al jugador al contactar con el objeto.
*/
function OnCollisionEnter(col : Collision){
	if (col.gameObject.CompareTag("Player"))	{
		col.gameObject.SendMessage("Die");
	}
}