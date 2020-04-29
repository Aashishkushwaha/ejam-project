const router = require("express").Router();
const Deployment = require("../../models/deployment");
const deploymentValidor = require("../../validator/deploymentValidator");

// @route /api/deployments/
// @method GET
// @access public
// @desc get deployments
router.get("/get", (req, res) => {
  Deployment.find({}).then((response) => {
    return res.status(200).json(response);
  });
});

// @route /api/deployments/add
// @method POST
// @access public
// @desc add deployment
router.post("/add", (req, res) => {
  const { isValid, errors } = deploymentValidor(req.body);
  
  if (!isValid) {
    console.log('/add errors : ',errors);
    return res.status(400).json(errors);
  }

  let newDeployment = new Deployment({
    url: req.body.url,
    templateName: req.body.templateName,
    version: req.body.version,
  });

  newDeployment
    .save()
    .then((deployment) => res.status(201).send(deployment))
    .catch((error) => res.status(400).send(error));
});

// @route /api/deployments/delete/:deploymentId
// @method delete
// @access public
// @desc delete deployment
router.delete("/delete/:deploymentId", (req, res) => {
  let id = req.params.deploymentId;
  
  Deployment.findById(id)
    .then((deployment) => {
      deployment
        .remove()
        .then(() => res.json({ message: "Deployment deleted successfully." }))
        .catch((err) => res.json(err));
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Deployment with id " + id + " does not found." })
    );
});

module.exports = router;
