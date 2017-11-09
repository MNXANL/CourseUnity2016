#pragma strict



function OnCollisionEnter (col : Collision) {
	if (col.gameObject.CompareTag("Player") ) {
		col.gameObject.SendMessage("Dead");
	}
	if (col.gameObject.CompareTag("EnemyTag") ) {
		col.gameObject.SendMessage("Dead");
	}
}

function Start () {
	
}

function Update () {
	
}