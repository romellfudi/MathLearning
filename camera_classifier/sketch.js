let mobilenet;
let classifier;
let video;
let label = 'Please add samples for each class';
let class_a;
let class_b;
let trainButton;
let labelDescription;
let numASamples=0,numBSamples=0;

function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    label.html('Model is Ready!');
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}


function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}

function setup() {
  labelDescription = createP('Usage:: Each class buttom store a class sample, when you capture all pics need it, press train button');
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  class_a = createButton('CLASS A ('+numASamples+')');
  class_a.position(10, height + 80);
  class_a.mousePressed(function() {
    numASamples++;
    class_a.html('CLASS A ('+numASamples+')');
    classifier.addImage('CLASS A');
  });

  class_b = createButton('CLASS B ('+numASamples+')');
  class_b.position(class_a.width+10, height + 80);
  class_b.mousePressed(function() {
    numBSamples++;
    class_b.html('CLASS B ('+numBSamples+')');
    classifier.addImage('CLASS B');
  });

  trainButton = createButton('train');
  trainButton.position(class_b.width+class_b.x+10, height + 80);
  trainButton.mousePressed(function() {
    class_a.html('CLASS A ('+numASamples+')');
    class_b.html('CLASS B ('+numBSamples+')');
    classifier.train(whileTraining);
  });


}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}
