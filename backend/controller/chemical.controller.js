const Compound = require('../model/compound.model');

exports.getAllCompounds = async (req, res) => {
    try {
        const compounds = await Compound.findAll();
        return res.json(compounds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
exports.getCompoundById = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound.findByPk(id);
        if (compound) {
        return res.json(compound);
        } else{
            return res.status(404).json({ error: 'Compound not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateCompound = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const compound = await Compound.findByPk(id);
        if(!compound){
            return res.status(404).json({ error: 'Compound not found' });
        }
        if(name)
            compound.compoundName = name;
        if(description)
            compound.compoundDesc = description;
        await compound.save();
        return res.json(compound);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteCompound = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound.findByPk(id);
        if (compound) {
            await compound.destroy();
            return res.status(204).end();
        } else {
            return res.status(404).json({ error: 'Compound not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};