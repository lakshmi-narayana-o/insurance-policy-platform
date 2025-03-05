import express, { Request, Response } from 'express';
import { Op } from 'sequelize';
import Policy from '../model/policy.model';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      search,
      minPremium,
      maxPremium,
      policyType,
      minCoverage,
      sortBy = 'premium',
      sortOrder = 'ASC'
    } = req.query;

    let whereConditions: any = {};

    if (search) {
      whereConditions.name = {
        [Op.iLike]: `%${search}%`
      }
    }

    if (minPremium || maxPremium) {
      whereConditions.premium = {};
      if (minPremium) whereConditions.premium[Op.gte] = minPremium;
      if (maxPremium) whereConditions.premium[Op.lte] = maxPremium;
    }

    if (policyType) {
      whereConditions.type = policyType;
    }

    if (minCoverage) {
      whereConditions.coverage = {
        [Op.gte]: minCoverage
      };
    }

    const policies = await Policy.findAll({
      where: whereConditions,
      order: [[sortBy as string, sortOrder as string]],
    });

    res.json(policies);
  } catch (error) {
    console.error('Error fetching policies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newPolicy = await Policy.create(req.body);
    res.status(201).json(newPolicy);
  } catch (error) {
    console.error('Error creating policy:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;