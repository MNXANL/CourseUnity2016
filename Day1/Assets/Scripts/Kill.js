#pragma strict



function OnCollisionEnter (col : Collision) {

	if (col.gameObject.CompareTag("EnemyTag") ) {
		Destroy(col.gameObject);
		Destroy(gameObject);
	}
}

function Start () {
	
}

function Update () {
	
}