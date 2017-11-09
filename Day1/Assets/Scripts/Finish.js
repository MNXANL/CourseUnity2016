#pragma strict

import UnityEngine.UI;

public var WinPicture : Image;
private var finished : boolean = false;

function Start() {
	WinPicture.enabled = false;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) && finished) {
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
		Debug.Log("Game Paused");

	}
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if (hit.gameObject.CompareTag("TargetTag")) {
		Time.timeScale = 0.0;
		finished = true;
		WinPicture.enabled = true;
		Debug.Log("FINISH!");
	}
}