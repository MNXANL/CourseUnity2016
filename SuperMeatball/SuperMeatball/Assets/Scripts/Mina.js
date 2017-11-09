#pragma strict

public var explosion : GameObject;
public var countdown : float = 3.0f;

private var time : float = 0.0f;
private var touched : boolean = false;

function Start () {

}

/*
 Añadir una cuenta atrás, y al acabar se instancia/"spawnea" una explosión del objeto (la mina en sí).
*/
function Update () {
	if (touched)	{
		time += Time.deltaTime;
		if (time > countdown)		{
			var exp : GameObject = GameObject.Instantiate(explosion, transform.position, Quaternion());
			Destroy(gameObject);
		}
	}
}

/*
 La función que activa el contador de la mina
*/
function OnCollisionEnter(col : Collision){
	if(col.gameObject.CompareTag("Player") || col.gameObject.CompareTag("Mine"))	{
		touched = true;
	}
}