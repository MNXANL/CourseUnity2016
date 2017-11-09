#pragma strict

private var PosX : float;
private var PosY : float;
private var PosZ : float;

private var ADSPosX : float;
private var ADSPosY : float;
private var ADSPosZ : float;


private var zoom : float;

function Start() {
	PosX = transform.position.x;
	PosY = transform.position.y;

	ADSPosX = PosX - 0.6f;
	ADSPosY = PosY - 0.18f;

	zoom = Camera.main.fieldOfView;

}

function Update() {
	if (Input.GetButtonDown("Aim")){
		//transform.position.x -= 0.59f;
		//transform.position.y += 0.225f;

		Camera.main.fieldOfView = zoom - 40;
	}
	else if (Input.GetButtonUp("Aim")){
		//transform.position.x += .59f;
		//transform.position.y -= .225f;
		
		Camera.main.fieldOfView = zoom;
	}
}

/*
FPS
-49.4, -23.73, 20
---------------------
ADS
-50, -23.55, 20
*/