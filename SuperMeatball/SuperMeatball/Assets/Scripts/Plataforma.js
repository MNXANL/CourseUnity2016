#pragma strict

function Start () {
}

function Update () {
}

function OnDrawGizmos(){
	Gizmos.color = Color(0,1,0);
	Gizmos.DrawWireSphere(transform.position, transform.localScale.x/2);
}