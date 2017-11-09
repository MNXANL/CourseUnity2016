#pragma strict

import UnityEngine.SceneManagement;

private var player : GameObject;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	var renderer = GetComponent.<Renderer>();
	if (transform.position.x < player.transform.position.x && !renderer.isVisible) {
		Destroy(gameObject);
	}
}


function OnTriggerEnter2D(col : Collider2D) {
	if (col.gameObject.tag == "Player" && gameObject.tag == "Ring") {
		player.SendMessage("CoinGet");
		Destroy(gameObject);
	}
}